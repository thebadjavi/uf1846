const express = require('express');

const countryControllers = require('../controllers/countryControllers');

const router = express.Router();

router.get('/', countryControllers.getHomePage);
router.post('/post-country/', countryControllers.postSendData);

module.exports = router;