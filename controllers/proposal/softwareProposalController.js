import softwareProposalModel from "../../models/proposal/softwareProposal.js";

export const softwareProposalController = async (req, res) => {
  const {
    typeofDevelopment,
    typeOfSoftware,
    numberofTools,
    industryType,
    services,
    otherServiceDetails,
    UIDesignMockups,
    chosenCMS,
    cmsDetails,
    appFeatures,
    typeOfMedia,
    paymentSystem,
    visitors,
    complianceRequirements,
    details,
    websiteLink,
    username,
    companyName,
    email,
    phoneNumber,
    integrationDetails,
    wayOfCommunication,
    indstryotherDetails,
    agreement,
    otherCompliance,
    otherFeatureDetails,
    otherMediaDetails,
    otherSoftwareDetails,
  } = req.body;

  try {
    if (typeofDevelopment !== "software") {
      return res
        .status(501)
        .json({ message: "Invalid type of type of development" });
    }

    if (!username || !companyName || !email || !phoneNumber) {
      return res.status(401).json({ message: "Missing required fields!" });
    }

    let softwareProposalDetails = await new softwareProposalModel({
      typeofDevelopment,
      typeOfSoftware,
      numberofTools,
      industryType,
      services,
      otherServiceDetails,
      UIDesignMockups,
      chosenCMS,
      cmsDetails,
      appFeatures,
      typeofMedia: typeOfMedia,
      paymentSystem,
      visitors,
      complianceRequirements,
      details,
      websiteLink,
      username,
      companyName,
      email,
      phoneNumber,
      wayOfCommunication,
      industryotherDetails: indstryotherDetails,
      integrationDetails,
      otherCompliance,
      agreement,
      otherFeatureDetails,
      otherMediaDetails,
      otherSoftwareDetails,
    });

    await softwareProposalDetails
      .save()
      .then(res.status(200).json({ message: "Details have been shared " }))
      .catch((err) => {
        throw new Error(err);
      });
  } catch (err) {
    console.log("Error in Software Proposal Submission: ", err);
    res.status(500).json({
      error: "Server Error in software proposal submission",
    });
  }
};
