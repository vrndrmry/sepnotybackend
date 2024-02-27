import express from 'express'
import { Logout, adminLoginForm,userLoginForm } from '../controllers/user.js'
const router = express.Router()

router.post('/admin/register',adminLoginForm)
router.post('/user',userLoginForm)
router.get('/user/logout',Logout)


export default router;