const express = require('express');
const router = express.Router();


const {authenticateUser} = require('../middleware/authentication')

const {
    handleMessage,
} = require('../controllers/chatController');





router.route('/message').post(handleMessage)



module.exports = router;

