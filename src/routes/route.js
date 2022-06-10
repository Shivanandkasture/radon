const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController");
const bookController= require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");


router.post("/createAuthor", authorController.createAuthor);

router.post("/createPublisher", publisherController.creatPublishers);

router.post("/createBook", bookController.createBook);

router.get("/getAuthorsData", authorController.getAuthorsData);

router.get("/getBooksData", bookController.getBooksData);

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails);


module.exports = router;