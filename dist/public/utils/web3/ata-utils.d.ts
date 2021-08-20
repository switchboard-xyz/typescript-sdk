import { u64 } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Instruction } from "../models/instruction";
export declare type ResolvedTokenAddressInstruction = {
  address: PublicKey;
} & Instruction;
export declare function resolveOrCreateAssociatedTokenAddress(
  connection: Connection,
  owner: Keypair,
  tokenMint: PublicKey,
  amountIn?: u64
): Promise<ResolvedTokenAddressInstruction>;
export declare function deriveAssociatedTokenAddress(
  walletAddress: PublicKey,
  tokenMint: PublicKey
): Promise<PublicKey>;
