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
const csv = require("csvtojson");
const review_1 = require("../models/review");
const location_1 = require("../models/location");
const hotel_1 = require("../models/hotel");
exports.restoreToDB = () => __awaiter(this, void 0, void 0, function* () {
    const csvFilePath = './src/data/hotels7146782.csv';
    const jsonArray = yield csv().fromFile(csvFilePath);
    //console.log("​restoreToDB -> jsonArray", jsonArray[0])
    for (let doc of jsonArray) {
        //doc = JSON.parse(doc);
        console.log("​restoreToDB -> doc");
        let review = doc['reviews'];
        let geo = {
            type: "Point",
            coordinates: [
                doc['longitude'],
                doc['latitude']
            ]
        };
        let location = {
            address: doc['address'],
            city: doc['city'],
            country: doc['country'],
            location: geo,
            postalCode: doc['postalCode'],
            province: doc['province']
        };
        let locDoc = yield location_1.LocationModel.create(location);
        let reviewDoc = yield review_1.ReviewModel.create(review);
        let hotelDoc = yield hotel_1.HotelModel.create({
            name: doc['name'],
            categories: doc['categories'].split(/\s*,\s*/),
            reviews: [reviewDoc._id],
            locationInfo: locDoc._id
        });
        console.log("​document write done : ", hotelDoc._id);
    }
    return jsonArray;
});
//# sourceMappingURL=restoreService.js.map