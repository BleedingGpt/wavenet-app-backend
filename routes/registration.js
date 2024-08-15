const router = require('express').Router();
let Registration = require('../models/registration.model');


router.route('/').post((req, res) => {
  const fullName = req.body.fullName;
  const mobileNo = req.body.mobileNo;
  const email = req.body.email;
  const nid = req.body.nid;
  const district = req.body.district;
  const upazila = req.body.upazila;
  const address = req.body.address;
  const package = req.body.package;
  const verificationCode = req.body.verificationCode;
  const disclaimer = req.body.disclaimer;

  const newRegistration = new Registration({
    fullName,
    mobileNo,
    email,
    nid,
    district,
    upazila,
    address,
    package,
    verificationCode,
    disclaimer,
  });

  newRegistration.save()
    .then(() => res.json('Registration successful'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
