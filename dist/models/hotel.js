"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
//@ts-ignore
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate");
exports.hotelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    reviews: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'review',
        }
    ],
    locationInfo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'location',
    }
});
exports.hotelSchema.plugin(mongoosePaginate);
exports.hotelSchema.plugin(mongooseAggregatePaginate);
exports.HotelModel = mongoose_1.model("hotel", exports.hotelSchema);
//@ts-ignore
//# sourceMappingURL=hotel.js.map