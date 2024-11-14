import mongoose from "mongoose";

export const VocabularySchema  = new mongoose.Schema({
    objectname: String,
    ipa: String,
    description: String,
    image: String,
    audio: String,
    level: String,
    sublevel: String
})

export interface Ivocabulary extends mongoose.Document{
    objectname: string;
    ipa: string;
    description: string;
    image: string;
    audio: string;
    level: string;
    sublevel: string
}

