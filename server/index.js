/*-------------------initial setup---------------*/
const express = require("express");
const cors = require("cors");
const AWS = require("aws-sdk");
const uuid = require("uuid/v4");
var fileUpload = require("express-fileupload");
const app = express();
app.use(fileUpload());
app.use(cors());
/* -------------------creating aws instance---------------*/
const S3 = new AWS.S3({
  accessKeyId: "AKIAJZA3ORIZZLK2IJAA",
  secretAccessKey: "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",
});
/* -------------------managing routes---------------*/
app.get("/upload", async (req, res) => {
  const respo = await S3.listObjects({
    Bucket: "video-levels123",
  }).promise();
  res.send(respo.Contents);
});
app.post("/upload", function (req, res) {
  const file = req.files;

  const params = {
    Bucket: "video-levels123",
    Key: `${uuid()}`,
    Body: file.image.data,
  };
  S3.upload(params, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});
/* -------------------connect to the port---------------*/
const port = process.env.PORT || 5004;
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
