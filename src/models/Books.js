const mongoose = require('mongoose');

const Books = new mongoose.Schema({
       
    name: String,
    
    author_id: Number,
   
    price: Number,
    ratings:  Number,
        
  }, { timestamps : true});

module.exports = mongoose.model('BooksDataBase', Books);