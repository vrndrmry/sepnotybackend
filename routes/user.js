import express from 'express'
import { Logout, adminLoginForm,userLoginForm } from '../controllers/user.js'
const router = express.Router()

router.post('/admin/register',adminLoginForm)
router.post('/user/login',userLoginForm)
router.post('/user/login',userLoginForm)
router.post('/user/logout',Logout)


export default router;