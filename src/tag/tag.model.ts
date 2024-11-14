import mongoose, { Document } from "mongoose";

export const TagSchema = new mongoose.Schema({
    image: { type: String, required: true },
    writingfield1: { type: String, required: true },
    writingfield2: { type: String, required: true, unique: true },
    writingfield3: { type: String, required: true, unique: true },
    writingfield4: { type: String, required: true },
    writingfield5: { type: String, required: true },
    audio: { type: String, required: true }
});

export interface Itag extends Document {
    image: string;
    writingfield1: string;
    writingfield2: string;
    writingfield3: string;
    writingfield4: string;
    writingfield5: string;
    audio: string
}

