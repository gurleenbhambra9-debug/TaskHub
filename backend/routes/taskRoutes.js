import express from 'express'
const router=express.Router()
import { createTask, deleteTask, getAllTasks, getSingleTask, updateTask } from '../controller/taskController.js'
import authmiddle from '../middleware/authmiddleware.js'

router.post('/task', authmiddle, createTask)
router.get('/task', authmiddle, getAllTasks)
router.get('/task/:id',authmiddle,getSingleTask)
router.put('/task/:id', authmiddle, updateTask)
router.delete('/task/:id',authmiddle,deleteTask)
export default router