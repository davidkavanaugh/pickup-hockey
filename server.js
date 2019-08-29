const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const multer = require('multer');


const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

// Upload profileImg to MongoDB

app.post('/uploadphoto', upload.single('picture'), (req, res) => {
  var img = fs.readFileSync(req.file.path);
var encode_image = img.toString('base64');

// Define a JSONobject for the image attributes for saving to database
var finalImg = {
    contentType: req.file.mimetype,
    image:  new Buffer(encode_image, 'base64')
 };
 
db.collection('quotes').insertOne(finalImg, (err, result) => {
  console.log(result)

  if (err) return console.log(err)

  console.log('saved to database')
  res.redirect('/')
 
   
})
})

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
