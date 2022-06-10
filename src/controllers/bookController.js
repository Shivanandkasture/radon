const authorModel = require("../models/newAuthorModel")
const bookModel= require("../models/newBookModel")

const createBook= async function (req, res) {
    
    if(!req.body.author_id){
      
        res.send({msg:"please enter auther id"})
      }
      else if(!req.body.author_id == "62a1c6b24a53010ab2607203")
      {
        
        res.send({msg : "author_Id is not present"})

      }
      else if(!req.body.publisher){
       
        res.send({msg : "publisher detail is required"})
      }
      else if(!req.body.publisher == "62a1ca1f4a53010ab260720d"){
         
        res.send({msg : " publisher_Id is not present"})
      }
      else{
       
        const bookCreated = await bookModel.create(req.body);
        res.send({data:bookCreated})
      }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    
    let specificBook = await bookModel.find().populate("author_id").populate("publisher")

    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
