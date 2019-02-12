"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.reviewSchema = new mongoose_1.Schema({
    rating: {
        type: Number,
    },
    text: {
        type: String,
    },
    title: {
        type: String
    },
    username: {
        type: String,
    },
});
exports.ReviewModel = mongoose_1.model("review", exports.reviewSchema);
//# sourceMappingURL=review.js.map