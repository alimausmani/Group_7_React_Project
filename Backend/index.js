const express = require('express');
const bodyParser = require('body-parser');
const createUserRouter = require('./CreateUser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors({
  origin:true,
  methods:["PUT","DELETE","POST","GET"],
  credentials:true
}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Gofoodmern", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => console.error("MongoDB connection error:", err));

app.use('/api', createUserRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});









