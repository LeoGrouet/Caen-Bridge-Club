const express = require("express");
const pageController = require("../../client/controllers/pageController");
const adminControllers = require("../controllers/adminController");
const memberControllers = require("../controllers/memberController");
const competitionControllers = require("../controllers/competitionDateController");
const verifyAdmin = require("../../client/middleware/verifyAdmin");
const getNextCompetitionMiddleware = require("../../client/middleware/getNextCompetition");

const router = express.Router();

//Page de visite
router.get("/", getNextCompetitionMiddleware, pageController.homePage);
router.get("/schedule", getNextCompetitionMiddleware, pageController.schedule);

//Router Member Controlleurs
router.post("/members/add", memberControllers.addMember);
router.post("/delete-member/:_id", memberControllers.deleteMember);

//Router Administrateur
router.get("/login", getNextCompetitionMiddleware, pageController.loginPage);
router.post("/admin", verifyAdmin.verif, pageController.admin); // Connection
router.get("/admin", pageController.admin);

//Router Admin Controller
router.post("/admin/add", adminControllers.addAdmin);
router.post("/delete-admin/:_id", adminControllers.deleteAdmin);

//Router Compétition Controller
router.post("/competition/add", competitionControllers.addCompetition);
router.post(
  "/delete-competition/:_id",
  competitionControllers.deleteCompetition
);

module.exports = router;
