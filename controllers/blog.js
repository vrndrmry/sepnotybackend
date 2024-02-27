import jwt from "jsonwebtoken";
import postModel from "../models/Blog.js";
import User from "../models/User.js";

export const getAllPost = (req, res) => {
  res.send("Getting all post");
};

// Creating a post
export const createNewPost = async (req, res) => {
  try {
    const token = req.cookies.token;
    const id = req.params.id;
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, async (err, info) => {
        if (err) res.status(401).json({ message: "Cookies not verified" });

        const { typeOfPost, title, summary, content } = req.body;
        const postDoc = await postModel.create({
          typeOfPost,
          title,
          summary,
          content,
          author: info.name,
          authorId: info.id,
          image: {
            name: req.file?.originalname,
            filename: req.file?.filename,
            data: req.file?.buffer,
            contentType: req.file?.mimeType,
            path: req.file?.path,
          },
        });
        res.json(postDoc);
      });
    } else {
      res
        .status(401)
        .json({ message: "unauthorised access. Login to continue" });
    }
  } catch (err) {
    res.status(401).json(err);
  }
};

export const deletePost = async (req, res) => {
  const token = req.cookies.token;
  try {
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, info) => {
        if (err) throw err;
      });

      const { id, postid } = req.params;

      const postDoc = await postModel.deleteOne({ _id: postid, authorId: id });

      res.status(200).json({ message: "Post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
