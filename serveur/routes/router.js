const express = require("express");
const pageController = require("../../client/controllers/pageController");
const adminControllers = require("../controllers/adminController");
const memberControllers = require("../controllers/memberController");

const router = express.Router();

router.get("/", pageController.homePage);
router.get("/schedule", pageController.schedule);

router.get("/admin", pageController.admin);

router.post("/members/add", memberControllers.addMember);
router.post("/admin/add", adminControllers.addAdmin);

router.post("/delete-member/:_id", memberControllers.deleteMember);

module.exports = router;
