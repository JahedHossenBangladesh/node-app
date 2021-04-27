  
const mongoose = require('mongoose');
const Joi = require("@hapi/joi")
const express = require("express");
const app = express();
const genres = require("./routers/genres");
const customers = require("./routers/customers")
const home = require("./routers/Home");
const port = process.env.PORT || 27017;

mongoose.connect('mongodb://localhost/vidly',{ useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log('db is connected'))
.catch((err) => console.error('there is a error',err.message));


app.use(express.json());
app.use("/api/genres",genres);
app.use("/api/customers",customers);
app.use('/',home);





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});