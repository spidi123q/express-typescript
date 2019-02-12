import { PaginateModel, Document, Schema, Model, model} from "mongoose";
import { Review } from "./review";
import * as mongoosePaginate from 'mongoose-paginate';
//@ts-ignore
import * as mongooseAggregatePaginate from 'mongoose-aggregate-paginate';

export interface Hotel extends Document {
    name: string;
    locationInfo: Location;
    reviews: Array<Review>;
    categories: Array<string>;
}

export var hotelSchema: Schema = new Schema({
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
            type: Schema.Types.ObjectId,
            ref: 'review',
        }
    ],
    locationInfo:  {
        type: Schema.Types.ObjectId,
        ref: 'location',
    }
});
hotelSchema.plugin(mongoosePaginate);
hotelSchema.plugin(mongooseAggregatePaginate);
interface HotelModel<T extends Document> extends PaginateModel<T> {}
export const HotelModel: HotelModel<Hotel> = model<Hotel>("hotel", hotelSchema);
//@ts-ignore