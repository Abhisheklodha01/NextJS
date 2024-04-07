import { Schema, model, models } from "mongoose";

const workSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})


export const Work = models.works || model("works", workSchema)