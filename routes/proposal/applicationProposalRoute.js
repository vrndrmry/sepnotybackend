import express from 'express'
import { applicationProposalController } from '../../controllers/proposal/applicationProposalController.js'

const router = express.Router()


router.post('/applicationProposal',applicationProposalController)

export default router