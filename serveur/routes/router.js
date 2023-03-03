const express = require("express");
const pageController = require("../../client/controllers/pageController");
const memberControllers = require("../controllers/memberController");

const router = express.Router();

router.get("/", pageController.homePage);
router.get("/schedule", pageController.schedule);

router.get("/admin", pageController.admin);

router.post("/members/add", memberControllers.addMember);

router.delete("/members/delete", memberControllers.deleteMember);

module.exports = router;
