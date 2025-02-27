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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwapInstruction = exports.createApprovalInstruction = void 0;
const spl_token_1 = require("@solana/spl-token");
const spl_token_swap_1 = require("@solana/spl-token-swap");
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("../../constants");
const createApprovalInstruction = (ownerAddress, approveAmount, tokenUserAddress) => {
    const userTransferAuthority = new web3_js_1.Keypair();
    const approvalInstruction = spl_token_1.Token.createApproveInstruction(spl_token_1.TOKEN_PROGRAM_ID, tokenUserAddress, userTransferAuthority.publicKey, ownerAddress, [], approveAmount);
    const revokeInstruction = spl_token_1.Token.createRevokeInstruction(spl_token_1.TOKEN_PROGRAM_ID, tokenUserAddress, ownerAddress, []);
    return {
        userTransferAuthority: userTransferAuthority,
        instructions: [approvalInstruction],
        cleanupInstructions: [revokeInstruction],
        signers: [userTransferAuthority],
    };
};
exports.createApprovalInstruction = createApprovalInstruction;
const createSwapInstruction = (poolParams, owner, inputToken, inputTokenUserAddress, outputToken, outputTokenUserAddress, amountIn, minimumAmountOut, userTransferAuthority) => __awaiter(void 0, void 0, void 0, function* () {
    const amountInU64 = amountIn;
    const minimumAmountOutU64 = minimumAmountOut;
    const [authorityForPoolAddress] = yield web3_js_1.PublicKey.findProgramAddress([poolParams.address.toBuffer()], constants_1.ORCA_TOKEN_SWAP_ID);
    const swapInstruction = spl_token_swap_1.TokenSwap.swapInstruction(poolParams.address, authorityForPoolAddress, userTransferAuthority, inputTokenUserAddress, inputToken.addr, outputToken.addr, outputTokenUserAddress, poolParams.poolTokenMint, poolParams.feeAccount, null, constants_1.ORCA_TOKEN_SWAP_ID, spl_token_1.TOKEN_PROGRAM_ID, amountInU64, minimumAmountOutU64);
    return {
        instructions: [swapInstruction],
        cleanupInstructions: [],
        signers: [owner],
    };
});
exports.createSwapInstruction = createSwapInstruction;
