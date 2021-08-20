import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaU64, OrcaPool, OrcaToken, Quote, TransactionPayload } from "../../../public";
import { OrcaPoolParams } from "./pool-types";
export declare class OrcaPoolImpl implements OrcaPool {
  private connection;
  private poolParams;
  constructor(connection: Connection, config: OrcaPoolParams);
  getTokenA(): OrcaToken;
  getTokenB(): OrcaToken;
  getLPBalance(owner: PublicKey): Promise<OrcaU64>;
  getLPSupply(): Promise<OrcaU64>;
  getQuote(
    inputToken: OrcaToken,
    inputAmount: Decimal | OrcaU64,
    slippage?: Decimal
  ): Promise<Quote>;
  swap(
    owner: Keypair,
    inputToken: OrcaToken,
    amountIn: Decimal | OrcaU64,
    minimumAmountOut: Decimal | OrcaU64
  ): Promise<TransactionPayload>;
}
