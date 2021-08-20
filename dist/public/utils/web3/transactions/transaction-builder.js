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
exports.TransactionBuilder = void 0;
const web3_js_1 = require("@solana/web3.js");
class TransactionBuilder {
    constructor(connection, feePayer) {
        this.connection = connection;
        this.feePayer = feePayer;
        this.instructions = [];
    }
    addInstruction(instruction) {
        this.instructions.push(instruction);
        return this;
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            const recentBlockHash = (yield this.connection.getRecentBlockhash("singleGossip")).blockhash;
            const txFields = {
                recentBlockhash: recentBlockHash,
                feePayer: this.feePayer,
            };
            let instructions = [];
            let cleanupInstructions = [];
            let signers = [];
            this.instructions.forEach((curr) => {
                instructions = instructions.concat(curr.instructions);
                cleanupInstructions = cleanupInstructions.concat(curr.cleanupInstructions);
                signers = signers.concat(curr.signers);
            });
            const transaction = new web3_js_1.Transaction(txFields);
            transaction.add(...instructions.concat(cleanupInstructions));
            transaction.feePayer = this.feePayer;
            const payload = {
                transaction: transaction,
                signers: signers,
                execute: () => __awaiter(this, void 0, void 0, function* () {
                    return web3_js_1.sendAndConfirmTransaction(this.connection, transaction, signers);
                }),
            };
            return payload;
        });
    }
}
exports.TransactionBuilder = TransactionBuilder;
