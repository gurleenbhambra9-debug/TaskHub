import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import dns from 'dns'
import userRoute from './routes/userRoutes.js'
import taskRoute from './routes/taskRoutes.js'
import task from './model/task.js';
dns.setServers(['8.8.8.8', '1.1.1.1'])
dotenv.config();
const app=express();
connectDB()

app.use(express.json())
app.use('/api', userRoute)
app.use('/test',taskRoute)

const PORT=process.env.PORT
app.get('/',(req,res)=>{
    res.send("this is home page")
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})