import { u64 } from "@solana/spl-token";
import { Keypair, PublicKey } from "@solana/web3.js";
import { Instruction } from "../..";
import { ResolvedTokenAddressInstruction } from "../ata-utils";
export declare const createWSOLAccountInstructions: (
  owner: PublicKey,
  solMint: PublicKey,
  amountIn: u64,
  rentExemptLamports: number
) => ResolvedTokenAddressInstruction;
export declare function createAssociatedTokenAccountInstruction(
  associatedTokenAddress: PublicKey,
  fundSource: PublicKey,
  destination: PublicKey,
  tokenMint: PublicKey,
  fundAddressOwner: Keypair
): Instruction;
