import websiteProposalModel from "../../models/proposal/websiteProposal.js";

export const websiteProposalController = async (req,res)=>{
    const {
      typeofDevelopment,
      typeOfWebsite,
      numberOfPages,
      industryType,
      indstryotherDetails,
      otherFeatureDetails,
      services,
      websiteLink,
      otherServiceDetails,
      UIDesignMockups,
      chosenCMS,
      cmsDetails,
      appFeatures,
      typeOfMedia,
      paymentSystem,
      visitors,
      complianceRequirements,
      externalIntegration,
      integrationDetails,
      details,
      otherCompliance,
      username,
      email,
      companyName,
      phoneNumber,
      wayOfCommunication,
      agreement,
      otherMediaDetails,
      otherTypeOfWebsite,
    } = req.body;


    try{
        if (typeofDevelopment !== "website") {
          return res
            .status(501)
            .json({ message: "There is an error in website route." });
        }
        if (!username || !email || !companyName || !phoneNumber) {
          return res.status(400).json({ msg: "Please fill all fields" });
        }

        let webisteProposalDetails = await new websiteProposalModel({
          typeofDevelopment,
          typeOfWebsite,
          numberOfPages,
          industryType,
          indstryotherDetails,
          services,
          websiteLink,
          otherServiceDetails,
          UIDesignMockups,
          chosenCMS,
          cmsDetails,
          appFeatures,
          typeOfMedia,
          paymentSystem,
          visitors,
          complianceRequirements,
          externalIntegration,
          integrationDetails,
          details,
          otherCompliance,
          username,
          email,
          companyName,
          phoneNumber,
          wayOfCommunication,
          agreement,
          otherFeatureDetails,
          otherMediaDetails,
          otherTypeOfWebsite,
        });

        webisteProposalDetails.save().then(() => {
          res.status(201).json({ body: req.body });
        });
        // res.status(200).json("Data received in backend");
    }catch(err){
        res.status(400).send("an error occured");
    }
    
}