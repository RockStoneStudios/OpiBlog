const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Auth = require('./routes/auth');
const User = require('./routes/users');
const Post = require('./routes/posts');
const Category = require('./routes/categories');
const cors = require('cors');
const multer = require("multer");
const path = require('path');

dotenv.config();

app.use("/images", express.static(path.join(__dirname, "/images")));
dotenv.config();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use(Auth);
app.use('/user',User);
app.use('/post',Post);
app.use('/category',Category);




module.exports = app;