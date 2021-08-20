import { OrcaPoolParams } from "../../model/orca/pool/pool-types";
export declare function getTokens(
  poolParams: OrcaPoolParams,
  inputTokenId: string
): {
  inputPoolToken: import("../../model/orca/pool/pool-types").OrcaPoolToken;
  outputPoolToken: import("../../model/orca/pool/pool-types").OrcaPoolToken;
};
