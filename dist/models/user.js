"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    }
});
exports.UserModel = mongoose_1.model("user", exports.userSchema);
//# sourceMappingURL=user.js.map