const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, name: "dfdsfs" },
  { id: 2, name: "aaa" },
  { id: 3, name: "ours" },
];



router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send("The id is not found");
  res.send(course);
});

function validation(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

router.post("/", (req, res) => {
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((c) => (c.id = parseInt(req.params.id)));
  if (!course) return res.status(404).send("the id is not find");

  const index = courses.indexOf(course);

  courses.splice(index, 1);

  res.send(course);
});

module.exports = router;