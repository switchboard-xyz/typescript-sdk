import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool } from "..";
export declare class OrcaFactory {
  getPool(connection: Connection, config: OrcaPoolConfig): OrcaPool;
}
