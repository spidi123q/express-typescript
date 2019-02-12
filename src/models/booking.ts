import { PaginateModel, Document, Schema, Model, model} from "mongoose";
import * as mongoosePaginate from 'mongoose-paginate';

export interface Booking extends Document {
    name: string;
    seatInfo: object;
}

export var bookingSchema: Schema = new Schema({

    hotelRef:  {
        type: Schema.Types.ObjectId,
        ref: 'hotel',
    },
    userRef:  {
        type: Schema.Types.ObjectId,
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

export const BookingModel: Model<Booking> = model<Booking>("booking", bookingSchema);