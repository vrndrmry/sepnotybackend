import { awsFunction } from "../middleware/aws.js";
import ContactUs from "../models/ContactUs.js";

export const contactUsForm = async (req, res) => {
  const { username, email, companyName, phoneNumber, message, agreement } =
    req.body;
  try {
    if (!username || !email || !phoneNumber) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    let contactDetails = await new ContactUs({
      username: username,
      email: email,
      companyName: companyName,
      phoneNumber: phoneNumber,
      message: message,
      agreement: JSON.parse(agreement),
    });

    contactDetails.uploadFile = req.file?.path;
    contactDetails
      .save()
      .then(() => {
        res.status(201).json({ body: req.body, file: req.file });
      })
      .catch((err) => {
        res.status(415).json({ msg: "Unsupported media file" });
      });
    try {
      awsFunction();
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
