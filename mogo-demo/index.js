const mongoose =require('mongoose');

mongoose
  .connect("mongodb://localhost/playGround",{useNewUrlParser:true,
useUnifiedTopology:true})
  .then(() => console.log("connected to mongoDB.."))
  .catch((err) => console.error("could not connect mongobb", err));


  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags:[String],
    date: {
      type:Date,
      default:Date.now
    },
    isPublished: Boolean,
  });

  //classes ,objects
  //Human, John
  //course,nodeCourse

  const Course = mongoose.model('course',courseSchema);

  async function createCourse(){
const course = new Course({
  name: "node.js Course",
  author: "Rahed",
  tags: ["node", "backend"],
  isPublished: true,
});
const result = await course.save();
console.log(result);

  }
  
  // createCourse();
//find by critical way 
//eq
//ne
//gt 
//lt 
//lte 
//gte 
// in
//nin

//logical method
//or 
//and
  async function getCourses(){
    const courses = await Course
    // .find({author:'Jahed',isPublished:true})
    // .find({price: 10 })
    // .find ({price : {$gte:10,$lt:20}})
    // .find({price:{$in:[10,20,30]}})
    // .find()
    // .or([{author:'Jahed'},{isPublished: true}])
    // .and ([{author:'Jahed',isPublished: true}])

//Start with Jahed
.find({author:/^Jahed/})

//End with Hossen
.find({author: /Jahed$/i})

//Contain anywhere Jahed
  .find({author: /.*Jahed.*/i})
    .limit(10)
    .sort({name:1})
    .select({name:1,tags:1})
    console.log(courses);
  }
 getCourses();