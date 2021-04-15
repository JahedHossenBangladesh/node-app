const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const courses= [
  {id:1,name:'Jahed'},
  {id:2,name:'YOu'},
  {id:3,name:"ours"},
]



app.get("/", (req, res) => {
  res.send("Hellow world");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) =>{
const course = courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(400).send('The id is not found');
res.send(course);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
