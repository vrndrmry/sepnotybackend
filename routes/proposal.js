import express from 'express'
import { proposalForm } from '../controllers/proposal.js'

const router = express.Router()

router.post('/proposal', proposalForm)

export default router