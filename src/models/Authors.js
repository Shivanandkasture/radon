const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema( {
     
  author_name:  String,
  author_id: Number,
  age: Number,
  address: String,
       
},
  { timestamps: true });

module.exports = mongoose.model('AuthorsDataBase', AuthorsSchema); 
