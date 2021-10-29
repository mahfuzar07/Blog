const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const multer = require('multer');
const path = require('path');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connect successfull'))
  .catch((err) => {
    console.log(err);
  });

//Multer file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).json('file has been uploaded');
});

//JSON
app.use(express.json());
//routes
const authRoute = require('./routes/auth');
app.use('/auth', authRoute);
const userRoute = require('./routes/users');
app.use('/user', userRoute);
const postRoute = require('./routes/posts');
app.use('/post', postRoute);
const categoriesRoute = require('./routes/categories');
app.use('/cat', categoriesRoute);

//file
app.use('/images', express.static(path.join(__dirname, '/images')));

app.listen(5050, () => {
  console.log('server is running');
});
