const express = require('express');
const app = express();

app.post('/',(req,res) =>{
    res.send("Hellow world");
});
app.post ('/course',(req,res) =>{
    res.send([1,2,3]);
});

app.listen(5000,() => console.log("listining the 3000"));