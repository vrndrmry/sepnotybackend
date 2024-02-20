import Proposal from '../models/Proposal.js'

export const proposalForm = async(req,res)=>{
    const {typeOfWebsite,numberOfPages,industryType,services,UIDesignMockups,chosenCMS,appFeatures,typeOfMedia,paymentSystem,visitors,complianceRequirements,externalIntegration,details,username,email,companyName,phoneNumber,wayOfCommunication,agreement}= req.body
    try{
        if (!username || !email || !phoneNumber) {
            return res.status(400).json({ msg: "Please fill all fields" });
          }
          let proposalDetails = await new Proposal({
            typeOfWebsite,numberOfPages,industryType,services,UIDesignMockups,chosenCMS,appFeatures,typeOfMedia,paymentSystem,visitors,complianceRequirements,externalIntegration,details,username,email,companyName,phoneNumber,wayOfCommunication,agreement
          })

          proposalDetails.save().then(() => {
            res.status(201).json({ body: req.body });
          })
    }catch(err){
        res.status(400).send("an error occured");
    }
}