import { Document, Schema, Model, model} from "mongoose";

export interface User extends Document {
    userId: string;
}

export var userSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true
    }
});

export const UserModel: Model<User> = model<User>("user", userSchema);