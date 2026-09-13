import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        default:" this is defualt"
    },
    status:{
        type:String,
        enum:["in process", "pending", "completed"],
        default:"in process"
    },
    priority:{
        type:String,
        enum:["high", "medium","low"],
        default:"medium"
    },
    duedate:{
        type:Date
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{
    timestamps:true
})

const task= mongoose.model("task", taskSchema)
export default task;