import mongoose from "mongoose";

export const LevelSchema  = new mongoose.Schema({
    level: String,
    topic: String
})

export interface Ilevel extends mongoose.Document{
    level: string;
    topic: string
}
