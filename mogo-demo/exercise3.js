const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongo-exercises",{useNewUrlParser:true})
.then(() => console.log('db is connected'))
.catch((err) => console.error('error ',err.message))

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
    .find({isPublished: true})
.or([
    {price:{$gte:50}},
    {author:/.*mosh*/i}])
    .sort('-price')
    .select('name author price')
}

async function run(){
    const course = await getCourses();
    console.log(course)
}
run();