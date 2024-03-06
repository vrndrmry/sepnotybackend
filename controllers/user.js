import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const adminLoginForm = async (req, res) => {
  const { name, username, password, admin } = req.body;
  try {
    if (!name || !username || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    if (password.length < 8) {
      return res
        .status(411)
        .json({ msg: "Password should minimum of 8 length" });
    }

    //check if user exists in the database
    const extractUser = await User.findOne({ username: username })
      if (extractUser) {
        return res.status(409).json({ msg: "User already exists" });
      }
    else{
        //create and save a new user
    const newUser = await User.create({
        name,
        username,
        admin,
        password: bcrypt.hashSync(req.body.password, 10),
      });
  
      return res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export const userLoginForm = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username) {
      return res.status(400).json({ message: "Enter Username" });
    }
    if (!password) {
      return res.status(400).json({ message: "Enter Password" });
    }
    const userDoc = await User.findOne({ username: req.body.username });
    if (!userDoc) {
      return res.status(402).json({ message: "Username not found" });
    }

    const passOK = bcrypt.compareSync(req.body.password, userDoc.password);
    if (!passOK) {
      return res.status(401).send({
        message: false,
        message: "Incorrect Password",
      });
    }
    const payLoad = { name: userDoc.name, username, id: userDoc._id };

    if (passOK) {
      jwt.sign(
        payLoad,
        process.env.SECRET_KEY,
        { expiresIn: "1d" },
        (err, token) => {
          if (err) {
            return res.status(400).json(err);
          } else {
            return res.cookie("token", token).json({
                id:userDoc._id,
              name: userDoc.name,
              status: 200,
              message: "Login successfull",
            });
          }
        }
      );
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const Logout = (req,res)=>{
    res.cookie("token","").status(200).json({
        message:"Logout Successfull"
    })
}

