import mongoose, { Document } from "mongoose";

export const ProgressSchema = new mongoose.Schema({
    progressid: { type: String, required: true },
    sublevelid: { type: String, required: true },
    exerciseid: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    points: { type: Number, required: true },
    skillid: { type: String, required: true }
});

export interface Iprogress extends Document {
    progressid: string;
    sublevelid: string;
    exerciseid: string;
    date: string;
    time: string;
    points: number;
    skillid: string;
}
