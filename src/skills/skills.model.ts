import mongoose from "mongoose";

export const SkillsSchema  = new mongoose.Schema({
    typeofskill: String,
    audio: String,
    image: String,
    text: String
})

export interface Iskills extends mongoose.Document{
    typeofskill: string;
    audio: string;
    image: string;
    text: string;
}