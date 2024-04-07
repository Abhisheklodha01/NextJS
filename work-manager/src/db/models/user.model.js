import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    about: {
        type: String,
    },

    profileURL: {
        type: String
    }


}, { timestamps: true })


export const User = models.users || model("users", userSchema)