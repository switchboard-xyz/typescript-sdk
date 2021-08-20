"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteBuilderFactory = void 0;
const pool_types_1 = require("../orca/pool/pool-types");
const constant_product_quote_1 = require("./constant-product-quote");
class QuoteBuilderFactory {
    static getBuilder(curveType) {
        switch (curveType) {
            case pool_types_1.CurveType.ConstantProduct:
                return new constant_product_quote_1.ConstantProductPoolQuoteBuilder();
            default:
                return undefined;
        }
    }
}
exports.QuoteBuilderFactory = QuoteBuilderFactory;
