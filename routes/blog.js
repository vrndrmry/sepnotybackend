import express from 'express'
import {createNewPost, getAllPost} from '../controllers/blog.js'
const router = express.Router()

router.get('/post',getAllPost)
router.post(`/:id/post`,createNewPost)
export default router