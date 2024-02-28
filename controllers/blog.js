import jwt from "jsonwebtoken";
import postModel from "../models/Blog.js";
import User from "../models/User.js";

export const getAllPost = async (req, res) => {
  res.json(await postModel.find().sort({ createdAt: -1 }));
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
    res.json(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { id, postid } = req.params;
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, async (err, info) => {
        if (err) res.status(401).json({ message: "Cookies not verified" });

        let newImage = null; //Create a variable to initialize the image so that if user don't want to update the image
        const { typeOfPost, title, summary, content } = req.body;

        const updatePostDoc = await postModel
          .findById(postid)
          .catch((err) => new Error("invalid post update request")); // handling the error is the postid is not valid

        const isAuthor =
          JSON.stringify(updatePostDoc.authorId) === JSON.stringify(id);

        const isPost =
          JSON.stringify(updatePostDoc._id) === JSON.stringify(postid);

        if (!isAuthor) {
          return res
            .status(400)
            .json({ message: "You are not actual user" });
        }

        if (!isPost) {
          return res
            .status(400)
            .json({ message: "You are acessing invalid post" });
        }

        if (req.file) {
          newImage = {
            name: req.file.originalname,
            filename: req.file.filename,
            data: req.file.buffer,
            contentType: req.file.mimeType,
            path: req.file.path,
          };
        }

        const updatedDocument = await postModel.updateOne({
          typeOfPost,
          title,
          summary,
          content,
          author: info.name,
          authorId: info.id,
          image: newImage ? newImage : updatePostDoc.image,
        });

        res.status(200).json({message:"Post Update"});
      });
    }
  } catch (err) {
    res.json(err);
  }
};
