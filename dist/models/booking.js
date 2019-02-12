"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.bookingSchema = new mongoose_1.Schema({
    hotelRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'hotel',
    },
    userRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
    },
    userId: {
        type: String,
        required: true
    },
    noRooms: {
        type: Number,
        required: true
    },
    noGuests: {
        type: Number,
        required: true
    }
});
exports.BookingModel = mongoose_1.model("booking", exports.bookingSchema);
//# sourceMappingURL=booking.js.map