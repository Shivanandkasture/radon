const { application } = require('express');
const express = require('express');

//const router = express.Router();

const app = express.Router();
app.get('/soli', function(req, res){

    let array = [1,2,3,5,6,7];

    let total = 0;
    for( let i in array){
        total += array[i]; 
    }

    let lastDigit = array.pop();
    let consecutiveSum = lastDigit * (lastDigit) / 2;
    let missingNumber = consecutiveSum - total;
    res.send( {dat : missingNumber})
})

app.get('/soli2', function(req, res){

    let arr = [33,34,35,37,38];

    let len =  arr.length; 

    let total = 0;
    for(let i in arr){
        total += arr[i];
    }

    let firstDigit = arr[0];
    let lastDigit = arr.pop();
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) /2;
    let missingNumber = consecutiveSum - total;
    res.send({data : missingNumber});
})

module.exports =  app;


