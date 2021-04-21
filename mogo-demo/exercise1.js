const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost/mongo-exercises", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecting db"))
  .catch((err) => console.error("error is ", err.message));

const courseSchema = mongoose.Schema({
    name: String,
    tages:[String],
    date:Date,
    author: String,
    isPublished:Boolean,
    price:Number
})

const Course = mongoose.model('course',courseSchema);

async function getCourses(){
    return await Course
    .find({isPublished: true,tages:'backend'})
    .sort({name:1})
    .select({name:1,author:1})
}

async function run(){
    const courses = await getCourses();
    console.log(courses);
}

run();
