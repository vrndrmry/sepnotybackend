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
      agreement: agreement,
    });

    if (req.files.length > 1) {
      return res.status(301).json({ msg: `You must upload only one file` });
    } else {
      contactDetails.uploadFile = req.files[0]?.path;
      contactDetails
        .save()
        .then(() => {
          res.status(201).json({ body: req.body, file: req.file });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ msg: "Server error please try again later" });
        });
    }
  } catch (e) {
    res.status(400).send("an error occured");
  }
};
