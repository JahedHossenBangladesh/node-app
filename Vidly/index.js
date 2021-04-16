const Joi = require("@hapi/joi")
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


const genres = [
    { id:1, name:'Don'},
    { id:2,name:"WAR"},
    {id:3, name:"The God Must be Crazy"}
]


app.get('/',(req, res) =>{
    res.send("Hello Vidly");
})
app.get('/api/genres',(req, res) =>{
    res.send(genres);
})

app.get('/api/genres/:id',(req, res) =>{
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(400).send("The id is not found ");
    res.send(genre);
})

function validation (genre){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(genre,schema)
    }



app.post('/api/genres',(req, res) =>{
    const {error} = validation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const gener = {
        id : genres.length + 1,
        name :req.body.name,
    };
    genres.push(gener);
    res.send(gener);
})

app.put("/api/genres/:id", (req, res) => {
  const gener = genres.find((c) => c.id === parseInt(req.params.id));
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  gener.name = req.body.name;
  res.send(gener);
});
app.delete("/api/genres/:id", (req, res) => {
  const gener = genres.find((c) => c.id === parseInt(req.params.id));
  if (!gener) return res.status(400).send("Id is not find");

  const index = genres.indexOf(gener);
  genres.splice(index, 1);
  res.send(gener);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});