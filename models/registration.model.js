// models/registration.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrationSchema = new Schema({
  fullName: { type: String, required: true },
  mobileNo: { type: String, required: true },
  email: { type: String, required: true },
  nid: { type: String },
  district: { type: String, required: true },
  upazila: { type: String, required: true },
  address: { type: String, required: true },
  package: { type: String, required: true },
  verificationCode: { type: String, required: true },
  disclaimer: { type: Boolean, required: true },
}, {
  timestamps: true,
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
