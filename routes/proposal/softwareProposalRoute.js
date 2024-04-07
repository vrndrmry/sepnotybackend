import express from 'express'
import { softwareProposalController } from '../../controllers/proposal/softwareProposalController.js'

const router = express.Router()

router.post('/softwareProposal',softwareProposalController)

export default router