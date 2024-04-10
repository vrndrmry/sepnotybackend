import candidateResumeModel from "../models/candidateResume.js";
import {awsFunction} from '../middleware/aws.js'
export const candidateResume = async (req, res) => {
  try {
    const { username, email, phoneNumber } = req.body;

    if (phoneNumber.trim().split("").length !== 10) {
      return res.status(400).json({ msg: "Please enter valid phone number" });
    }

    if (!username || !email || !phoneNumber || !req.file.filename) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    let candidateDetails = await new candidateResumeModel({
      applicantName: username.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber,
      resumeFile: req.file.path,
    });

    candidateDetails
      .save()
      .then(() => res.status(201).json("data saved successfully"))
      .catch((err) => {
        console.log(err);
        res.status(415).json(err);
      });
      try {
        awsFunction();
      } catch (err) {
        console.log(err);
      }
  } catch (err) {
    console.log({ errorFrommain: err });
    res.status(400).send(err);
  }
  
};
