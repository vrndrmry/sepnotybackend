import AWS from "aws-sdk";
import fs from "fs";
import path from "path";

// Configure AWS with your accessKeyId and secretAccessKey
const s3 = new AWS.S3({
  accessKeyId: "accessKEy",
  secretAccessKey: "SecretKey",
});

// Function to upload a file from "uploads" folder to AWS S3 bucket
export const uploadFileToS3 = (filePath) => {
  return new Promise((resolve, reject) => {
    // const fileName = filePath.file.filename; // Get the file name from the file path
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return reject(err);
      }

      const params = {
        Bucket: "ssdas-aws-bucket",
        Key: filePath, // Use the file name as the key in S3
        Body: data,
      };

      // Upload file to S3
      s3.upload(params, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data.Location); // Return the URL of the uploaded file
      });
    });
  });
};

// Function to delete a file from the "uploads" folder
export const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

// Get the list of files in the "uploads" folder
const uploadFolder = "./uploads/contactus/";
export const awsFunction = () =>
  fs.readdir(uploadFolder, (err, files) => {
    if (err) {
      console.error("Error reading upload folder:", err);
      return;
    }

    // Upload each file in the folder to S3
    files.forEach((file) => {
      // console.log(uploadFolder)
      // console.log(file)
      // console.log(path.join(uploadFolder,file))
      const filePath = path.join(uploadFolder, file);

      console.log(filePath);
      uploadFileToS3(filePath)
        .then((url) => {
          console.log(`File ${file} uploaded successfully. URL:`, url);
          // After uploading, delete the file from the "uploads" folder
          return deleteFile(filePath);
        })
        .then(() => {
          console.log(`File ${file} deleted from uploads folder.`);
        })
        .catch((err) => {
          console.error(`Error uploading or deleting file ${file}:`, err);
        });
    });
  });
