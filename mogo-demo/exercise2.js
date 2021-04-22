const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongo-exercises",{useNewUrlParser:true})
.then(()=> console.log('database is connected'))
.catch((err) => console.error('the error is ',err.message));

const courseSchema = mongoose.Schema({
  name: String,
  tages: [String],
  date: Date,
  author: String,
  isPublished: Boolean,
  price: Number,
});


const Course = mongoose.model('course',courseSchema);

async function getCourses(){
    return await Course
    .find({ isPublished: true })
      .or([{ tages: "frontend" }, { tages: "backend" }])
      .sort("-price")
      .select("name author price");
}

async function run(){
    const course = await getCourses();
    console.log(course)
}

run();