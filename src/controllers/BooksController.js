
const authorModel = require('../models/Authors.js');
const booksModel = require('../models/Books.js')

const createBooks = async(req,res) =>{
   
    if(!req.body.author_id){
      res.send({msg:"please enter auther id"})
    }
    else
    {
      const data = await booksModel.create(req.body);
      res.send({msg:data})
    }
  
}
  
    // find Author id and listbooks
  
     // const findIdAndListBooks = async (req,res)=>{
   
    // const author = await authorModel.find({author_name:"Chetan Bhagat"})
   
    // res.send({author});
    
  //    const books = await booksModel.find({author_id:1})    
  //    res.send({msg:books});
  //  }
  
//     // UpdateBookPrice

//    const findAuthor = async (req,res)=>{
   
//    const UpdatebookPrice = await booksModel.findOneAndUpdate({name:"Two states"} , {price :100} ,{new:true});
  
//    res.send({UpdateBookPrice : UpdatebookPrice })
  
//    const UpdatebookPrice2 = await booksModel.findOneAndUpdate({author_id:1}, {price :100}, {new: true})
   
//    res.send({ updateprice : UpdatebookPrice2})
  
// }
   
//     // BookByCost
    

    const findBookByCost = async (req,res) => {
    
  //  const bookName = await booksModel.find({price : { $gte: 50, $lte: 100}}).select({name:1});
  //   res.send({bookName})

  //   const authorName = await authorModel.find().select({authorName:1});

    //res.send({authorName});
   const authorid = await booksModel.find({price :{$gte : 50, $lte : 100}}).select({author_id:1});
    res.send({authorid});

  
      
    }
 
  
    module.exports = createBooks;
   // module.exports = findIdAndListBooks;
   module.exports = findBookByCost;
 //  module.exports = findAuthor;