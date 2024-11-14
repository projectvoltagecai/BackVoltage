import mongoose from "mongoose";

export const SublevelSchema  = new mongoose.Schema({
    sublevel: String,
    topic: String
})

export interface Isublevel extends mongoose.Document{
    sublevel: string;
    topic: string
}
