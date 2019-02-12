import { Document, Schema, Model, model} from "mongoose";

export interface Screen extends Document {
    name: string;
    seatInfo: object;
}

export interface ScreenRow {
    numberOfSeats: number;
    aisleSeats: Array<number>;
}

export var screenSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    seatInfo: {
        type: Object,
        required: true
    }
});

export const ScreenModel: Model<Screen> = model<Screen>("screen", screenSchema);