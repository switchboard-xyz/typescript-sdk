import { u64 } from "@solana/spl-token";
import { Keypair, PublicKey } from "@solana/web3.js";
import { OrcaPoolParams, OrcaPoolToken } from "../../../../model/orca/pool/pool-types";
import { Instruction } from "../../models";
export declare const createApprovalInstruction: (
  ownerAddress: PublicKey,
  approveAmount: u64,
  tokenUserAddress: PublicKey
) => {
  userTransferAuthority: Keypair;
} & Instruction;
export declare const createSwapInstruction: (
  poolParams: OrcaPoolParams,
  owner: Keypair,
  inputToken: OrcaPoolToken,
  inputTokenUserAddress: PublicKey,
  outputToken: OrcaPoolToken,
  outputTokenUserAddress: PublicKey,
  amountIn: u64,
  minimumAmountOut: u64,
  userTransferAuthority: PublicKey
) => Promise<Instruction>;
