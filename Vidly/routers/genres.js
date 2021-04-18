const express = require('express');
const router = express.Router();

const genres = [
  { id: 1, name: "Don" },
  { id: 2, name: "WAR" },
  { id: 3, name: "The God Must be Crazy" },
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(400).send("The id is not found ");
  res.send(genre);
});

function validation(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
}

router.post("/", (req, res) => {
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const gener = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(gener);
  res.send(gener);
});

router.put("/:id", (req, res) => {
  const gener = genres.find((c) => c.id === parseInt(req.params.id));
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  gener.name = req.body.name;
  res.send(gener);
});
router.delete("/:id", (req, res) => {
  const gener = genres.find((c) => c.id === parseInt(req.params.id));
  if (!gener) return res.status(400).send("Id is not find");

  const index = genres.indexOf(gener);
  genres.splice(index, 1);
  res.send(gener);
});

module.exports = router;