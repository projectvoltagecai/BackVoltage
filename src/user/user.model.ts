import mongoose, { Document } from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    user: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export interface Iuser extends Document {
    name: string;
    surname: string;
    mail: string;
    user: string;
    password: string;
}
