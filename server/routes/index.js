const express = require('express');
const router = express.Router();
const user = require('./user');
const movies = require('./movies')
const auth = require('./auth')


router.use('/user', user);
router.use('/movies', movies);
router.use('/auth', auth);

module.exports = router;