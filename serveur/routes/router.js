const express = require("express");
const pageController = require("../../client/controllers/pageController");
const adminControllers = require("../controllers/adminController");
const memberControllers = require("../controllers/memberController");
const verifyAdmin = require("../../client/middleware/verifyAdmin");

const router = express.Router();

//Page de visite
router.get("/", pageController.homePage);
router.get("/schedule", pageController.schedule);
router.get("/admin", pageController.admin);

//Router Member Controlleurs
router.post("/members/add", memberControllers.addMember);
router.post("/delete-member/:_id", memberControllers.deleteMember);

//Router Administrateur
router.get("/login", pageController.loginPage);
router.post("/loged", verifyAdmin.verif, pageController.admin); // Connection

//Router Admin Controller
router.post("/admin/add", adminControllers.addAdmin);
router.post("/delete-admin/:_id", adminControllers.deleteAdmin);

//Router Compétition Controller

module.exports = router;
