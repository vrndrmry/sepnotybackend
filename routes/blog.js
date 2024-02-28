import express from 'express'
import {createNewPost, deletePost, getAllPost, updatePost} from '../controllers/blog.js'
import blogUpload from '../middleware/blog.js'
const router = express.Router()

router.get('/post',getAllPost)
router.post(`/:id/create`,blogUpload.single('image'),createNewPost)
router.delete(`/:id/delete/:postid`,deletePost)
router.put("/:id/update/:postid", blogUpload.single("image"), updatePost);
export default router