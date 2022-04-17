const express = require("express");
const {
  getApplicationById,
  createApplicaton,
  getAllApplication,
  approve,

} = require("./application.controller");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../cloudinary/cloudinary.config");
const upload = multer({ storage });


router.get("/", (req, res) => {
  res.render("application");
});

router.get("/applications", getAllApplication);
router.get("/application/:id", getApplicationById);
router.post("/application/approve/:id", approve);


router.get("/drop", (req, res) => {
  res.render("dropdow")
});
router.post("/drop", (req, res) => {
res.send(req.body)
});


router.post("/application", upload.fields([
  {name: "profile_picture", maxCount: 1},
  {name: "passport", maxCount: 1},
  {name: "diploma", maxCount: 1},
  {name: "transcript", maxCount: 1}
]), createApplicaton);



module.exports = router;
