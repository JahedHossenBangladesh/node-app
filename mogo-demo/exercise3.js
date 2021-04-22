const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongo-exercises",{useNewUrlParser:true,useUnifiedTopology:true})
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

// run();


async function updateCourse(id){
 const courseId = await Course.findById(id);
 if(!courseId) return;

 courseId.isPublished = true;
 courseId.author = "Another Course";

const result = await courseId.save();
console.log(result)

}




updateCourse('3244234234');


async function deleteId(id){
    // const corseDelete = await Course.deleteOne({_id:id });
    // const result = await Course.deleteMany({_id:id});
    const resultdelet = await Course.findByIdAndRemove(id);
    
console.log(resultdelet)

};

// deleteId('3244234234');
