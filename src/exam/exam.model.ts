import mongoose from "mongoose";

export const ExamSchema  = new mongoose.Schema({
    question: String,
    answer: String,
    points: String,
    level: String,
    sublevel: String
})

export interface Iexam extends mongoose.Document{
    question: string;
    answer: string;
    points: string;
    level: string;
    sublevel: string
}
