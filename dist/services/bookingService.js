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
const userService_1 = require("./userService");
const booking_1 = require("../models/booking");
exports.bookHotel = (data) => __awaiter(this, void 0, void 0, function* () {
    let response = {
        isAlreadyBooked: true
    };
    const count = yield booking_1.BookingModel.countDocuments({
        userId: data.userId,
        hotelRef: data.hotelRef
    });
    if (count > 0) {
        return response;
    }
    else {
        const user = yield userService_1.getUser(data.userId);
        data.userRef = user._id;
        const result = yield booking_1.BookingModel.create(data);
        response.isAlreadyBooked = false;
        response['doc'] = result;
        return response;
    }
});
exports.getMyBookings = (userId) => __awaiter(this, void 0, void 0, function* () {
    return yield booking_1.BookingModel.find({ userId })
        .populate('hotelRef');
});
exports.updateBooking = (id, data) => __awaiter(this, void 0, void 0, function* () {
    console.log("​updateBooking -> data", data);
    console.log("​updateBooking -> id", id);
    delete data._id;
    console.log("​updateBooking -> data2", data);
    return yield booking_1.BookingModel.findByIdAndUpdate(id, data);
});
//# sourceMappingURL=bookingService.js.map