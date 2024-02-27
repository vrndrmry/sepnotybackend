import path from "path";
import multer from "multer";

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/blog/");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname.split(" ").join("")}`);
  },
});

var blogUpload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Only jpeg,jpg,png fill supported upto 5 MB"));
    }
  },
  limits: 1024 * 1024 * 5,
});

export default blogUpload;
