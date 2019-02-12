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
const hotel_1 = require("../models/hotel");
exports.getAllHotels = (page, filter) => __awaiter(this, void 0, void 0, function* () {
    let populate = ['locationInfo', 'reviews'];
    let query = {};
    if (filter.name) {
        query['name'] = {
            $regex: '.*' + filter.name + '.*', $options: 'i'
        };
    }
    if (filter.city) {
        let aggregate = hotel_1.HotelModel.aggregate();
        aggregate.lookup({
            from: "locations",
            localField: "locationInfo",
            foreignField: "_id",
            as: "locationInfo"
        })
            .match({
            'locationInfo.city': {
                $regex: '.*' + filter.city + '.*', $options: 'i'
            }
        });
        //@ts-ignore
        let docs = yield hotel_1.HotelModel.aggregatePaginate(aggregate, {
            page: page,
            limit: 10
        });
        docs = docs['data'];
        for (let i = 0; i < docs.length; i++) {
            docs[i].locationInfo = docs[i].locationInfo[0];
        }
        return { docs };
    }
    if (filter.rating) {
        let aggregate = hotel_1.HotelModel.aggregate();
        aggregate.lookup({
            from: "reviews",
            localField: "reviews",
            foreignField: "_id",
            as: "inventory_docs"
        })
            .addFields({
            avg: { $avg: "$inventory_docs.rating" }
        })
            .sort({ "avg": -1 })
            .lookup({
            from: "reviews",
            localField: "reviews",
            foreignField: "_id",
            as: "reviews"
        })
            .lookup({
            from: "locations",
            localField: "locationInfo",
            foreignField: "_id",
            as: "locationInfo"
        });
        //@ts-ignore
        let docs = yield hotel_1.HotelModel.aggregatePaginate(aggregate, {
            page: page,
            limit: 10,
            populate: ['locationInfo']
        });
        docs = docs['data'];
        for (let i = 0; i < docs.length; i++) {
            docs[i].locationInfo = docs[i].locationInfo[0];
        }
        return { docs };
    }
    let data = yield hotel_1.HotelModel.paginate(query, {
        page: page,
        limit: 10,
        populate: populate
    });
    return data;
});
//# sourceMappingURL=hotelService.js.map