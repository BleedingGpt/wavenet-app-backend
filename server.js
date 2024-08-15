// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://root35:KLlM1qNeFwcto9h2@cluster-10.bmbervx.mongodb.net/registration_db');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const registrationRouter = require('./routes/registration');
app.use('/api/register', registrationRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
