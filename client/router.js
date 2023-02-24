const express = require('express');
const pageController = require('./controllers/pageController')

const router = express.Router();

router.get('/', pageController.homePage);
router.get('/schedule', pageController.schedule);

module.exports = router;