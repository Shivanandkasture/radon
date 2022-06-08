const express = require('express');
const router = express.Router();

const  createauthor  = require('../controllers/AuthorsController');
const  createBooks = require('../controllers/BooksController');
const  findBookByCost = require('../controllers/BooksController');
const  findIdAndListBooks = require('../controllers/BooksController');
const  findAuthor = require('../controllers/BooksController');



router.post('/createAuthor' , createauthor)
router.post('/createBook' , createBooks)

 router.get('/findByNameAndsendBook' , findIdAndListBooks)
 router.get('/findAuthor' , findAuthor)
router.get('/findBookByCost' , findBookByCost)

module.exports = router;