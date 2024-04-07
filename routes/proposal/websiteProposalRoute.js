import express from 'express'
import { websiteProposalController } from '../../controllers/proposal/webisteProposalController.js'

const router = express.Router()

router.post('/websiteProposal',websiteProposalController)
export default router

// typeofDevelopment: 'website',
//   typeOfWebsite: [ 'Content aggregator' ],
//   numberOfPages: '5,000-10,000',
//   industryType: [ 'Transportation & Logistics' ],
//   services: 'UI design/Redesign',
//   webisiteLink: '',
//   otherServiceDetails: '',
//   UIDesignMockups: 'I will need you to provide UI design',
//   chosenCMS: 'No',
//   cmsDetails: '',
//   appFeatures: [ 'Drag - and - drop Page editor' ],
//   typeOfMedia: [ 'Interactive content' ],
//   paymentSystem: true,
//   visitors: '1,000-5,000',
//   complianceRequirements: [ 'I need your consultation on compliance' ],
//   externalIntegration: true,
//   integrationDetails: '',
//   details: 'fg',
//   otherCompliance: '',
//   username: 'asdfs',
//   email: '4554klj@dsfdm.com',
//   companyName: 'sdasdsdaf',
//   phoneNumber: '9654238734',
//   wayOfCommunication: 'Any',
//   agreement: { contact: true, requestInfo: true }