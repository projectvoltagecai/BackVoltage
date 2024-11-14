import mongoose from "mongoose";

export const ChallengeSchema  = new mongoose.Schema({
    description: String,
    instruction: String,
    time: String,
    mode: String,
    points: String,
    steps: String,
    rightanswer: String,
    restriction: String
})

export interface Ichallenge extends mongoose.Document{
    description: string;
    instruction: string;
    time: string;
    mode: string;
    points: string;
    steps: string;
    rightanswer: string;
    restriction: string 
}