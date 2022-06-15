const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const auth  = require('../middleware/auth')
const authorisation = require('../middleware/auth');



router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.delete("/users/:userId",  userController.deleteUser)

// middleware
router.get("/usermid/:userId", auth.auth,authorisation.authorisation, userController.getUserData)

router.put("/usermid/:userId", auth.auth, authorisation.authorisation, userController.updateUser)

router.delete("/usermid/:userId", auth.auth,authorisation.authorisation, userController.deleteUser)

//router.get("/user1/:userId",auth.auth, auhtorisation.auhtorisation, userController.getUserData);

module.exports = router;