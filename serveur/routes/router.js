const express = require("express");
const pageController = require("../../client/controllers/pageController");
const adminControllers = require("../controllers/adminController");
const memberControllers = require("../controllers/memberController");
const verificateAdmin = require("../middleware/verificateAdmin");

const router = express.Router();

//Page de visite
router.get("/", pageController.homePage);
router.get("/schedule", pageController.schedule);
router.get("/admin", /*verificateAdmin.adminVerification,*/ pageController.admin);

//Router Member Controlleurs
router.post("/members/add", memberControllers.addMember);
router.post("/delete-member/:_id", memberControllers.deleteMember);

//Router Admin Controller
router.post("/admin/add", adminControllers.addAdmin);

//Router Compétition Controller

module.exports = router;
