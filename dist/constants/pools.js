"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orcaPoolConfigs = exports.liqUsdcPool = exports.samoSolPool = exports.kinSolPool = exports.orcaUsdcPool = exports.orcaSolPool = exports.mapsSolPool = exports.fidaSolPool = exports.merSolPool = exports.btcSolPool = exports.oxySolPool = exports.copeSolPool = exports.fttSolPool = exports.srmSolPool = exports.stepSolPool = exports.ropeSolPool = exports.raySolPool = exports.ethUsdcPool = exports.ethSolPool = exports.solUsdtPool = exports.solUsdcPool = void 0;
const web3_js_1 = require("@solana/web3.js");
const pool_types_1 = require("../model/orca/pool/pool-types");
const percentage_1 = require("../public/utils/models/percentage");
const Tokens = __importStar(require("./tokens"));
/**
 * The following content is auto-generated.
 */
exports.solUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("EGZ7tiLeH62TPV1gL8WwbXGzEPa9zmcpVnnkPKKnrE2U"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("JU8kmKzDHF9sXWsnoznaFDFezLsE5uomX2JkRMbmsQP"),
    poolTokenMint: new web3_js_1.PublicKey("APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8JnSiuvQq3BVuCU3n4DrSTw9chBSPvEMswrhtifVkr1o"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("ANP74VNsHwSrq9uUSjiSNyNWvf6ZPrKTmE4gHoNd13Lg") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("75HgnSvXbWKZBpZHveX68ZzAhDqMzNDS29X6BGLtxMo1") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.solUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("Dqk7mHQBx2ZWExmyrR2S8X6UG75CrbbpK2FSBZsNYsw6"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2sxKY7hxVFrY5oNE2DgaPAJFamMzsmFLM2DgVcjK5yTy"),
    poolTokenMint: new web3_js_1.PublicKey("FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BBKgw75FivTYXj85D2AWyVdaTdTWuSuHVXRm1Xu7fipb"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DTb8NKsfhEJGY1TrA7RXN6MBiTrjnkdMAfjPEjtmTT3M") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("E8erPjPEorykpPjFV9yUYMYigEWKQUxuGfL2rJKLJ3KU") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ethSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("EuK3xDa4rWuHeMQCBsHf1ETZNiEQb5C476oE9u9kp8Ji"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("DffrDbzPiswDJaiicBBo9CjqztKgFLrqXGwNJH4XQefZ"),
    poolTokenMint: new web3_js_1.PublicKey("71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("unxKgWEc71ZiHwMqZs3VLqjcjmZhfTZEg94ZLGvjdMP"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("7F2cLdio3i6CCJaypj9VfNDPW2DwT3vkDmZJDEfmxu6A") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5pUTGvN2AA2BEzBDU4CNDh3LHER15WS6J8oJf5XeZFD8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("FgZut2qVQEyPBibaTJbbX2PxaMZvT1vjDebiVaDp5BWP"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("4dfCZR32xXhoTgMRhnViNaTFwiKP9A34TDjHCR3xM5rg"),
    poolTokenMint: new web3_js_1.PublicKey("3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DLWewB12jzGn4wXJmFCddWDeof1Ma4cZYNRv9CP5hTvX"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("H9h5yTBfCHcb4eRP87fXczzXgNaMzKihr7bf1sjw7iuZ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("JA98RXv2VdxQD8pRQq4dzJ1Bp4nH8nokCGmxvPWKJ3hx") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.raySolPool = Object.freeze({
    address: new web3_js_1.PublicKey("3THMPkPmcHJ54JtHRyazhs7UN7HbV5KiNJVLJs6hSPSC"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EUc3MtHPLL956pTDfM5q25jp5Fk9zW7omEzh1uyDY7s6"),
    poolTokenMint: new web3_js_1.PublicKey("5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("65XNtnUsP1TMzKMGhMoD3GUFMNbmnZQwDaxDLE3jncUC"),
    tokenIds: [Tokens.rayToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.rayToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.rayToken), { addr: new web3_js_1.PublicKey("GZaUNWf4ov6VZaD5MqZtc5pHB3mWTqczNUB4sstt8CSR") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("GNSZ1rr57QQ6qLcmZnhMcoBymenVezhNpzcFSfJP37h9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ropeSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("DCENobjFZK59nLeMCVRkQtnkAWrJkWAVpmVnwVNc8gqH"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("C2DDX95TK3uC9MQXhHp3LWRv9kWtFTp36Ub9VPCKKiCV"),
    poolTokenMint: new web3_js_1.PublicKey("ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("88rKjeeDQYJxGVCG39znDvbxzjPc5H37XqHRQCSNJvED"),
    tokenIds: [Tokens.ropeToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ropeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ropeToken), { addr: new web3_js_1.PublicKey("HLHPVwgzYjTHmu1fmV9eZzdE8H3fZwhuCBRNNN2Z5miA") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("7Be3aStQmKgeXC1xqfJnA8qaGzw6keQTLqHYAJprZK2H") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stepSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2sNtf8wLZMR7XJm2pzvvVUNPTNRFsGTiC5vgDSGv5QGD"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HzAJLVqZ7fnmc2LfRPtz2GHu93RpAPQsdDTg6DRoTTmf"),
    poolTokenMint: new web3_js_1.PublicKey("8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5FEmPmAk72NycwzMXLD3hc2f47zRXocv4mvd3HEUZ5io"),
    tokenIds: [Tokens.stepToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.stepToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stepToken), { addr: new web3_js_1.PublicKey("35opuEpVvggzfV361hQVNXiC7KAKS1HCeDoVpfVybo8k") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("A3DSsYZJWHiwXSQb7P2AbEoaWhpauJLU1PVdTPnzV5s9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.srmSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("EJRXAkKyDhDgzdZz1Ss5CpWKWSK9xTR5S6GDLAer8mdh"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2pQbngWBSWUjBHWVWQ3tppKxW3Y5NzUcye1822itKyzZ"),
    poolTokenMint: new web3_js_1.PublicKey("9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("APyc1s8wES4Q2FTqHN8jXZtRuWQyRWZ82u7EFfras2iZ"),
    tokenIds: [Tokens.srmToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.srmToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.srmToken), { addr: new web3_js_1.PublicKey("2JCxZv6LaFjtWqBXSC2brsWE9WryS4Cp3VwwDeNGvLyv") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("EdhG3vQbTVVAARZB4AbhU2HsVbvfFqX2yhBAfFV22nzA") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fttSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("68Bg6yQxWm3mrUYk3XzMiF5ycE41HwPhyEdaB1cp6wuo"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("BpshqwEmPXmJwJfFgTFafmXoHN8Lc7SouvFsh6jyYQAm"),
    poolTokenMint: new web3_js_1.PublicKey("EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FWBCbjZnypLKz7uHGJXpBAEez2FurQXi9J3js7ZT1xDe"),
    tokenIds: [Tokens.fttToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.fttToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fttToken), { addr: new web3_js_1.PublicKey("3eVE92aEAsLYcBACXNu1yxoHVfTM8e8vmQC2zSApGRJX") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("BbsiNbFfJsRDwqF4JaiJ6sKecNuY4eWmEaDHcY6h6HuD") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.copeSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("BRx4dJecxzeGYc1BskCWonfGCeMyv9G7tk66cf2QGhK6"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("JAJr1D6BQHFj9qJ8pfXhvJgLfn9vTcviU9sTA8MhKzN4"),
    poolTokenMint: new web3_js_1.PublicKey("CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9X8VRnxk6EVKGA7TErdSZYFC8oLUM569pDbZTtycjvXw"),
    tokenIds: [Tokens.copeToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.copeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.copeToken), { addr: new web3_js_1.PublicKey("7v5GCdHH439SztxcqL4wpfWdPvv9EfMm8GYTHSUQoGoY") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5tSgRUK6f2x1nAXA4gdcHNXiWdToqni9pr5xvq2Fq82u") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.oxySolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Cq4EZrvuFQpsCz8L3gS6t7iQ7VWzTtqDgSxD4AgVAAfd"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("FxxcJPunf6Vj9Ve5zyM9yatMbmkrzTQ1QSk4NqKW9DvK"),
    poolTokenMint: new web3_js_1.PublicKey("7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Ch8i2A1GAspivXYfdme7vSxh1mhRjmRgeiKN8KpWhVqo"),
    tokenIds: [Tokens.oxyToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.oxyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.oxyToken), { addr: new web3_js_1.PublicKey("BoZQMfTLTPcXnevJxNFkECVbKesfhXnTUg4kxLgzV9BX") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("8ZrEcJbgg7BdoBga5RYDR8aMujLf5cAQp8zdPZqk7nNC") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.btcSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("7N2AEJ98qBs4PwEwZ6k5pj8uZBKMkZrKZeiC7A64B47u"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("GqnLhu3bPQ46nTZYNFDnzhwm31iFoqhi3ntXMtc5DPiT"),
    poolTokenMint: new web3_js_1.PublicKey("Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4yPG4A9jB3ibDMVXEN2aZW4oA1e1xzzA3z5VWjkZd18B"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("9G5TBPbEUg2iaFxJ29uVAT8ZzxY77esRshyHiLYZKRh8") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5eqcnUasgU2NRrEAeWxvFVRTTYWJWfAJhsdffvc6nJc2") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.merSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("UJBm2tHwDbQZpjQvaHozg5qkjh6prSKhnWheqR5T76Q"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("C8HcMrC9WRqqXVbHRhZWjuZPbbWmszDobKFxevCtGhpT"),
    poolTokenMint: new web3_js_1.PublicKey("HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3Fdj69449GhiDmqyvWWTSafjRphGdiDhZ5i5rqfHBdio"),
    tokenIds: [Tokens.merToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.merToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.merToken), { addr: new web3_js_1.PublicKey("DHdkRWTa9SRJNMtWZQYvNNbjrDP3n92EWLHezjFGPipb") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DC5RwjB3VkXdt2PoWKTA4Ub9KbtcY8xXpmPNKsFjALwq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fidaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("4SUBbivGMvMhem3ajVtkmuPvL4GuQ8kfYTJFuQfG4F8t"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("owuNLod7H14GpQCUodcdBBeD4LiZ2T5U9KpS2sAbTp6"),
    poolTokenMint: new web3_js_1.PublicKey("EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("J2s1GpduscTTvMYt3os8LdvT24uhr9bPnTbxSKZZhEma"),
    tokenIds: [Tokens.fidaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.fidaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fidaToken), { addr: new web3_js_1.PublicKey("9ofyx5yFzjH1XWmJzfiGCDfhq6ho8yFbszGQrrJXe54") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("55moYcq91pXbSRpL2DR8P3BehqSNWiJrdTn5SZFc2STn") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mapsSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("4rkgbbCPKk5zx3KiwcCNiSpNSSLgAkswKGfX7CJjGgtC"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8uuBxVsGf2bqH5t8mct5NfpgcTDb7czXuWVEm6Boia4x"),
    poolTokenMint: new web3_js_1.PublicKey("99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8w3gx1GQ1UN5sodEVP14qUwzCcgopHWUeWbT26hgK3xh"),
    tokenIds: [Tokens.mapsToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.mapsToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mapsToken), { addr: new web3_js_1.PublicKey("BqExNTYk7YdeiaREHqnqN2q1F3dBCTPhkwrrWBFD4F1m") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("HdEQ99E979aXn2xTcg5UXEfLynwFkqpPTxLaNkH7Nz7P") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2ZnVuidTHpi5WWKUwFXauYGhvdT9jRKYv5MDahtbwtYr"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2PH1quJj9MHQXATCmNZ6qQ2gZqM8R236DpKaz99ggVpm"),
    poolTokenMint: new web3_js_1.PublicKey("2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4Zc4kQZhRQeGztihvcGSWezJE1k44kKEgPCAkdeBfras"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("AioST8HKQJRqjE1mknk4Rydc8wVADhdQwRJmAAYX1T6Z") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("73zdy95DynZP4exdpuXTDsexcrWbDJX9TFi2E6CDzXh4") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2p7nYbtPBgtmY69NsE8DAW6szpRJn7tQvDnqvoEWQvjY"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("3fr1AhdiAmWLeNrS24CMoAu9pPgbzVhwLtJ6QUPmw2ob"),
    poolTokenMint: new web3_js_1.PublicKey("n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7CXZED4jfRp3qdHB9Py3up6v1C4UhHofFvfT6RXbJLRN"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("9vYWHBPz817wJdQpE8u3h8UoY3sZ16ZXdCcvLB7jY4Dj") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6UczejMUv1tzdvUzKpULKHxrK9sqLm8edR1v9jinVWm9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.kinSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Ez52BLSoZw3MxWxMK4ADsJXqzUiYW9sUnwcrrQwQGdLT"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("C6WisvFQzqxTBF3DV6RFbPMPBiVHE816CZHoctB3WzrW"),
    poolTokenMint: new web3_js_1.PublicKey("HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5bLeJU66qTopjZBa48BUd7EXWcj4UeCMfHjjrvt8Zcgs"),
    tokenIds: [Tokens.kinToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.kinToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.kinToken), { addr: new web3_js_1.PublicKey("2Ssm5Dd1Zc5QpGSZzuqt3Ef4bADteuBbCGiEZJ5n48rV") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("HCS9EpKRxWDS9GCRFStNbPWgRQpvV6EyBWChJja2UbCm") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.samoSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("DiAP9qmp5foN7fLTWfBWjo9KBS1jgvKUJLWi1ZhqKaja"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3uZcofBKVBYFrQ7jVjTFLEMWAQiZcih4AES5tKBqdo7m"),
    poolTokenMint: new web3_js_1.PublicKey("D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BYAjG645fRRHZ5JFnZKnXc4dzK9WppcoVWDMYj3zm3KF"),
    tokenIds: [Tokens.samoToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.samoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.samoToken), { addr: new web3_js_1.PublicKey("AFcbD7UTzk9d1njRxyDHNbQ5Q6miPNAE1GctjD96JYAi") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("6kYbPDsYLQUwptV7ZvQKG3gjNreEEgaWh2CM4DQPYTpq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.liqUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("AXSeEafwPUGSamiZWH8m2PJtvpDVtrofxvycNwxiysdh"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("6Y5TnCwgifc8Z7QYo672nT9uNd2hcivVR1NT6oDkJx6P"),
    poolTokenMint: new web3_js_1.PublicKey("3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FSVPcprrTkQLRtDACFEpa2rhEVx4kBvjPuQaxj572SaC"),
    tokenIds: [Tokens.liqToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.liqToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.liqToken), { addr: new web3_js_1.PublicKey("CVspL8Tj5YdqntXJegNeDXHiBn3648QDNB7gex6D9MgY") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8YzLsZ1FtsruswkBogEaXwmRTf5PMuyVcfSZXRAdi8qA") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
/**
 * Mapping for OrcaPool parameters
 * Key: poolTokenMint : OrcaPoolParams
 */
exports.orcaPoolConfigs = {
    APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9: exports.solUsdcPool,
    FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx: exports.solUsdtPool,
    "71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob": exports.ethSolPool,
    "3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX": exports.ethUsdcPool,
    "5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc": exports.raySolPool,
    ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V: exports.ropeSolPool,
    "8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP": exports.stepSolPool,
    "9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy": exports.srmSolPool,
    EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No: exports.fttSolPool,
    CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k: exports.copeSolPool,
    "7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT": exports.oxySolPool,
    Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe: exports.btcSolPool,
    HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L: exports.merSolPool,
    EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W: exports.fidaSolPool,
    "99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e": exports.mapsSolPool,
    "2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25": exports.orcaSolPool,
    n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx: exports.orcaUsdcPool,
    HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs: exports.kinSolPool,
    D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M: exports.samoSolPool,
    "3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG": exports.liqUsdcPool,
};
