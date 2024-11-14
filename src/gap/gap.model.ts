import mongoose, { Document } from "mongoose";

export const GapSchema = new mongoose.Schema({
    textincomplete: { type: String, required: true },
    words: { type: String, required: true },
    audio: { type: String, required: true, unique: true }

});

export interface Igap extends Document {
    textincomplete: string;
    words: string;
    audio: string

}
