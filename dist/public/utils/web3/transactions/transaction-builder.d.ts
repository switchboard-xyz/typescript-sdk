import { Connection, PublicKey } from "@solana/web3.js";
import { Instruction, TransactionPayload } from "../..";
export declare class TransactionBuilder {
  private connection;
  private feePayer;
  private instructions;
  constructor(connection: Connection, feePayer: PublicKey);
  addInstruction(instruction: Instruction): TransactionBuilder;
  build(): Promise<TransactionPayload>;
}
