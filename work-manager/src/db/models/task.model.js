import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true,
    },
    addedDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    },
    userId: {
       type: Schema.Types.ObjectId,
       ref: "users",
       required: true
    }


}, { timestamps: true })


export const Task = models.tasks || model("tasks", taskSchema)