import { Document, Schema, Model, model} from "mongoose";

export interface Review extends Document {
    rating: number;
    text: string;
    title: string;
    username: string
}

export var reviewSchema: Schema = new Schema({
    rating: {
        type: Number,
    },
    text: {
        type: String,
    },
    title: {
        type: String
    },
    username: {
        type: String,
    },
});

export const ReviewModel: Model<Review> = model<Review>("review", reviewSchema);