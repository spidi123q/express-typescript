"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.validator = {
    screen: {
        body: {
            name: Joi.string().required(),
            seatInfo: Joi.object().required()
        }
    },
    reserve: {
        body: {
            seats: Joi.object().required()
        }
    }
};
//# sourceMappingURL=index.js.map