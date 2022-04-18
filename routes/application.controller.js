const ErrorResponse = require("../utility/errorResponse");

const sendEmail = require("../utility/sendgmail");

const Application = require("../models/application.model");

const Approve = require("../models/approved.model");

// Get application by ID
const getAllApplication = async (req, res, next) => {
  let applicant = await Application.find().populate("approve");

  if (applicant === null || !applicant) {
    return next(
      new ErrorResponse(`Applicant not found with the name of :`, 404)
    );
  }
  res.render("dashboard", { applicant });
};

const getApplicationById = async (req, res, next) => {
  const { id } = req.params;

  let applicant;
  try {
    applicant = await Application.findOne({ _id: id }).populate("approve");
  } catch (error) {
    return next(
      new ErrorResponse(`Applicant not found with the name of : ${id}`, 404)
    );
  }

  let sts;

  if (applicant.approve[0] !== undefined) {
    sts = applicant.approve[0].status;
    // console.log("Sts :" , sts)
  } else {
    sts = "pending";
    // console.log("Sts :" , sts)
  }

  if (applicant === null || !applicant) {
    return next(
      new ErrorResponse(`Applicant not found with the name of : ${id}`, 404)
    );
  }

  // console.log("From router approvedStatus.status1", approvedStatus);
  res.render("application_from_student", { applicant, sts });
};

// Create Application
const createApplicaton = async (req, res, next) => {
  // console.log("req files.......:", req.files);
  const {
    first_name,
    last_name,
    gender,
    mobile_phone,
    email,
    mother_name,
    father_name,
    birth_date,
    country_of_birth,
    nationality,
    country_of_residence,
    city_of_residence,
    whatsapp_number,
    address,
    passport_date_of_issue,
    passport_number,
    passport_date_of_expire,
    s1,
    s2,
    s3,
    s4,
  } = req.body;

  const findEmail = await Application.findOne({ email });

  if (findEmail) {
    return next(new ErrorResponse("Your email is registered", 400));
  }
  const applicant = await Application.create({
    first_name,
    last_name,
    gender,
    mobile_phone,
    email,
    mother_name,
    father_name,
    birth_date,
    country_of_birth,
    nationality,
    country_of_residence,
    city_of_residence,
    whatsapp_number,
    address,
    passport_date_of_issue,
    passport_number,
    passport_date_of_expire,
    s1,
    s2,
    s3,
    s4,
    profile_picture: [{ imageUrl: req.files.profile_picture[0].path }],
    passport: [{ imageUrl: req.files.passport[0].path }],
    diploma: [{ imageUrl: req.files.diploma[0].path }],
    transcript: [{ imageUrl: req.files.transcript[0].path }],
  });

  // console.log("Applicatant:.......", applicant);

  const url = await applicant.id;

  const message = `Dear applicant, Thank you for applying in this program. We will let you shortly about your application`;
  sendEmail;
  try {
    await sendEmail({
      email: applicant.email,
      subject: "Regarding Applicaiton",
      message,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Email could not be sent", 500));
  }
  res.render("thank");
  // res.send(applicant);
};

// Approve Block
const approve = async (req, res, next) => {
  const application = await Application.findById(req.params.id);

  const { status } = req.body;

  const approved = await Approve.create({ status });

  application.approve.push(approved);

  await application.save();
  const statusOf = await approved.save();

  let message;
  if (approved.status === "Approved") {
    message = `Dear applicant, Congratulation! Your application is approved!`;
  } else {
    message = `Dear applicant, Thank you for applying in this program. We are sorry to say that we can not proceed with your application.`;
  }

  sendEmail;
  try {
    await sendEmail({
      email: application.email,
      subject: "Regarding Applicaiton",
      message,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Email could not be sent", 500));
  }
  res.redirect("/applications");
};

const deleteApplication = async (req, res) => {
  const { id } = req.params;
  await Application.findByIdAndDelete(id);
  res.redirect("/applications");
};

module.exports = {
  getApplicationById,
  createApplicaton,
  getAllApplication,
  approve,
  deleteApplication,
};
