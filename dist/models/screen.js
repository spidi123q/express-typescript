"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.screenSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    seatInfo: {
        type: Object,
        required: true
    }
});
exports.ScreenModel = mongoose_1.model("screen", exports.screenSchema);
//# sourceMappingURL=screen.js.map