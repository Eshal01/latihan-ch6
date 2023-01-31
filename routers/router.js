const express = require('express');
const biodata = require('./biodataRouter');
const login = require('./loginAdmin');
const users = require('./userRouter');
const router = express.Router();

router.use('/api', users);
router.use('/api', biodata);
router.use('/api', login);


module.exports = router;