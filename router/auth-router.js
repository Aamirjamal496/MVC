const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth-contorller")
router.route('/api/').get(authController.home)
router.route('/api/register').get(authController.register)

module.exports = router