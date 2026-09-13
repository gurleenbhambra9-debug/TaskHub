import task from '../model/task.js'

export const createTask=async(req,res)=>{
    try {
        const {title,description,status,priority,duedate}=req.body
        if(!title){
            return res.status(400).json({
                success:false,
                message:"title is required"
            })
        }
        const createdTask= await task.create({
            title,
            description,
            status,
            priority,
            duedate,
            user:req.user._id
        })
        res.status(201).json({
            success:true,
            message:"task is created",
            data:createdTask
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// get all tasks

export const getAllTasks= async(req,res)=>{
    try {
        const AllTasks= await task.find({
            user:req.user._id
        })
        res.status(200).json({
            success:true,
            message:"all tasks are fetched",
            data:AllTasks,
            count:AllTasks.length
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// get single task
export const getSingleTask= async(req,res)=>{
    try {
        const singleTask= await task.findById({
            _id:req.params.id,
            user:req.user._id
        })
        res.status(201).json({
            success:true,
            data:singleTask
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// update a task
export const updateTask=async(req,res)=>{
    try {
        const updatedTask= await task.findByIdAndUpdate({
            _id:req.params.id,
            user:req.user._id
        },
    req.body,
{new:true})
res.status(201).json({
    success:true,
    data:updatedTask
})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// delete a task
export const deleteTask= async(req,res)=>{
    try {
        const deletedTask=await task.findByIdAndDelete({
            _id:req.params.id,
            user:req.user._id
        })
        return res.status(201).json({
            success:true,
            data:deletedTask,
            message:"task is deleted"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}