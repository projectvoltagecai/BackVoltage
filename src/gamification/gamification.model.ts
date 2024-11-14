import mongoose from "mongoose";

export const GamificationSchema  = new mongoose.Schema({
    points: String,
    medals: String,
    lifes: String,
    streak: String,
    avatar: String,
    level: String,
    sublevel: String
})

export interface Igamification extends mongoose.Document{
    points: string;
    medals: string;
    lifes: string;
    streak: string;
    avatar: string;
    level: string;
    sublevel: string  
}