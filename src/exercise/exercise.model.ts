import mongoose from "mongoose";

export const ExerciseSchema  = new mongoose.Schema({
    exercisenumber: String,
    exercisetype: String,
    skill: String,
    level: String,
    sublevel: String,
    points: String,
    instruction: String,
    rightanswer: String
})

export interface Iexercise extends mongoose.Document{
    exercisenumber: string
    exercisetype: string;
    skill: string;
    level: string;
    sublevel: string;
    points: string;
    instruction: string
    rightanswer: string
}