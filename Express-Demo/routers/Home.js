const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hellow world");
//   res.render("index", { title: "This is my title", message: "Hello World" });
});

module.exports = router