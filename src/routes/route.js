const express = require('express');
const router = express.Router();

//const UserController= require("../controllers/userController")

const commonMW = require ("../middlewares/commonMiddlewares")


router.get("/createUser", commonMW.mid1);

module.exports = router;
