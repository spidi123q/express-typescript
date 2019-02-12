import { Document, Schema, Model, model} from "mongoose";

export interface GeoCoordinate {
    type: string;
    coordinates: Array<number>;
}

export interface Location extends Document {
    address: string;
    city: string;
    country: string;
    location: object;
    postalCode: string;
    province: string;
}

export var locationSchema: Schema = new Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});

export const LocationModel: Model<Location> = model<Location>("location", locationSchema);