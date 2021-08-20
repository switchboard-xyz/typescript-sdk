"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaFactory = void 0;
const pools_1 = require("../constants/pools");
const orca_pool_1 = require("./orca/pool/orca-pool");
class OrcaFactory {
    getPool(connection, config) {
        return new orca_pool_1.OrcaPoolImpl(connection, pools_1.orcaPoolConfigs[config]);
    }
}
exports.OrcaFactory = OrcaFactory;
