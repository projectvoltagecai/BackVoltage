import mongoose, { Document } from "mongoose";

export const ProgressSchema = new mongoose.Schema({
    userid: String,
    sublevelid: String,
    exerciseid: String,
    date: String,
    time: String,
    points: Number,
    skillid: String
});

export interface Iprogress extends Document {
    userid: string;
    sublevelid: string;
    exerciseid: string;
    date: string;
    time: string;
    points: number;
    skillid: string;
}
