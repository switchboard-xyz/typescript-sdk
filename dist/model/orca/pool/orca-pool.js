"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaPoolImpl = void 0;
const spl_token_1 = require("@solana/spl-token");
const orca_defaults_1 = require("../../../constants/orca-defaults");
const public_1 = require("../../../public");
const pool_instructions_1 = require("../../../public/utils/web3/instructions/pool-instructions");
const quote_builder_1 = require("../../quote/quote-builder");
class OrcaPoolImpl {
    constructor(connection, config) {
        this.connection = connection;
        this.poolParams = config;
    }
    getTokenA() {
        const tokenId = this.poolParams.tokenIds[0];
        return this.poolParams.tokens[tokenId];
    }
    getTokenB() {
        const tokenId = this.poolParams.tokenIds[1];
        return this.poolParams.tokens[tokenId];
    }
    getLPBalance(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield public_1.deriveAssociatedTokenAddress(owner, this.poolParams.poolTokenMint);
            const accountInfo = yield this.connection.getAccountInfo(address);
            // User does not have a balance for this account
            if (accountInfo == undefined) {
                return public_1.OrcaU64.fromNumber(0, this.poolParams.poolTokenDecimals);
            }
            const result = public_1.deserializeAccount(accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data);
            if (result == undefined) {
                throw new Error("Failed to parse user account for LP token.");
            }
            return public_1.OrcaU64.fromU64(result.amount, this.poolParams.poolTokenDecimals);
        });
    }
    getLPSupply() {
        return __awaiter(this, void 0, void 0, function* () {
            const context = yield this.connection.getTokenSupply(this.poolParams.poolTokenMint);
            const amt = new spl_token_1.u64(context.value.amount);
            return public_1.OrcaU64.fromU64(amt, this.poolParams.poolTokenDecimals);
        });
    }
    getQuote(inputToken, inputAmount, slippage) {
        return __awaiter(this, void 0, void 0, function* () {
            const slippageTolerance = slippage === undefined ? orca_defaults_1.defaultSlippagePercentage : public_1.Percentage.fromDecimal(slippage);
            const feeStructure = this.poolParams.feeStructure;
            const { inputPoolToken, outputPoolToken } = public_1.getTokens(this.poolParams, inputToken.mint.toString());
            const inputAmountU64 = public_1.U64Utils.toTokenU64(inputAmount, inputPoolToken, "inputAmount");
            const poolTokenCount = yield public_1.getTokenCount(this.connection, this.poolParams, inputPoolToken, outputPoolToken);
            const { value: { feeCalculator }, } = yield this.connection.getRecentBlockhashAndContext("singleGossip");
            const quoteParams = Object.assign(Object.assign({}, poolTokenCount), { inputToken: inputPoolToken, outputToken: outputPoolToken, feeStructure: feeStructure, slippageTolerance: slippageTolerance, lamportsPerSignature: feeCalculator.lamportsPerSignature });
            const quoteBuilder = quote_builder_1.QuoteBuilderFactory.getBuilder(this.poolParams.curveType);
            const quote = quoteBuilder === null || quoteBuilder === void 0 ? void 0 : quoteBuilder.buildQuote(quoteParams, inputAmountU64);
            if (quote == undefined) {
                throw new Error("Failed to get quote!");
            }
            return quote;
        });
    }
    swap(owner, inputToken, amountIn, minimumAmountOut) {
        return __awaiter(this, void 0, void 0, function* () {
            const ownerAddress = owner.publicKey;
            const { inputPoolToken, outputPoolToken } = public_1.getTokens(this.poolParams, inputToken.mint.toString());
            const amountInU64 = public_1.U64Utils.toTokenU64(amountIn, inputPoolToken, "amountIn");
            const minimumAmountOutU64 = public_1.U64Utils.toTokenU64(minimumAmountOut, outputPoolToken, "minimumAmountOut");
            const _a = yield public_1.resolveOrCreateAssociatedTokenAddress(this.connection, owner, inputPoolToken.mint, amountInU64), { address: inputPoolTokenUserAddress } = _a, resolveInputAddrInstructions = __rest(_a, ["address"]);
            const _b = yield public_1.resolveOrCreateAssociatedTokenAddress(this.connection, owner, outputPoolToken.mint, amountInU64), { address: outputPoolTokenUserAddress } = _b, resolveOutputAddrInstructions = __rest(_b, ["address"]);
            if (inputPoolTokenUserAddress === undefined || outputPoolTokenUserAddress === undefined) {
                throw new Error("Unable to derive input / output token associated address.");
            }
            const _c = pool_instructions_1.createApprovalInstruction(ownerAddress, amountInU64, inputPoolTokenUserAddress), { userTransferAuthority } = _c, approvalInstruction = __rest(_c, ["userTransferAuthority"]);
            const swapInstruction = yield pool_instructions_1.createSwapInstruction(this.poolParams, owner, inputPoolToken, inputPoolTokenUserAddress, outputPoolToken, outputPoolTokenUserAddress, amountInU64, minimumAmountOutU64, userTransferAuthority.publicKey);
            return yield new public_1.TransactionBuilder(this.connection, ownerAddress)
                .addInstruction(resolveInputAddrInstructions)
                .addInstruction(resolveOutputAddrInstructions)
                .addInstruction(approvalInstruction)
                .addInstruction(swapInstruction)
                .build();
        });
    }
}
exports.OrcaPoolImpl = OrcaPoolImpl;
