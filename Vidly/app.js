  
const Joi = require("@hapi/joi")
const express = require("express");
const app = express();
const genres = require("./routers/genres");
const home = require("./routers/Home");
const port = process.env.PORT || 3000;


app.use(express.json());
app.use("/api/genres",genres);
app.use('/',home);





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});