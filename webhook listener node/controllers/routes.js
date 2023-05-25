const express = require('express');

const saver = require('./saver');

const router = express.Router();

router.post('/webhook', saver.save);

router.use('/', saver.error);

module.exports = router;
