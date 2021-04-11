const fs = require('fs');

// This is in the syncronise
// const file = fs.readdirSync('./');
// console.log(file);

fs.readdir('./',function(err,result){
    if(err) {
        console.log('Error',err);
    } else{
        console.log('Result',result);
    }
})