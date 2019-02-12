"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_response_1 = require("../middleware/default-response");
const default_response_2 = require("./../middleware/default-response");
const hotelService = require("../services/hotelService");
exports.getAllHotels = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let result = yield hotelService.getAllHotels(req.params.page, req.query);
        default_response_1.successResponse(res, result);
    }
    catch (err) {
        default_response_2.errorResponse(res, err);
    }
});
//# sourceMappingURL=hotelController.js.map