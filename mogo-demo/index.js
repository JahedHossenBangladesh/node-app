const mongoose =require('mongoose');

mongoose
  .connect("mongodb://localhost/playGround",{useNewUrlParser:true,
useUnifiedTopology:true})
  .then(() => console.log("connected to mongoDB.."))
  .catch((err) => console.error("could not connect mongobb", err));


  const courseSchema = new mongoose.Schema({
    name: {type:String,
      required:true,
      minlength:5,
      maxlength: 255
    },
    category:{
       type:String,
       required: true,
       enum:['web','mobile','network']


    },
    author: String,
    tags:{
      type:Array,
      validate:{
        validator: function(v){
          return v && v.length >0;
        },
        message:'A course have at least 1 tag'
      }
    },
    date: {
      type:Date,
      default:Date.now
    },
    isPublished: Boolean,
    price:{type:Number,required:function(){
      return this.isPublished;}}

  });

  //classes ,objects
  //Human, John
  //course,nodeCourse

  const Course = mongoose.model('course',courseSchema);

  async function createCourse(){
const course = new Course({
  name: "node.js Course",
  category:'web',
  author: "Rahed",
  tags: [],
  isPublished: true,
  price :35
});
try{
const result = await course.save();
console.log(result);
}
catch (err){
  console.log(err.message);
}


  }
  
  createCourse();
















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

const pageNumber = 2;
const pageSize = 10;

    const courses = await Course



    // .find({author:'Jahed',isPublished:true})
    // .find({price: 10 })
    // .find ({price : {$gte:10,$lt:20}})
    // .find({price:{$in:[10,20,30]}})
    // .find()
    // .or([{author:'Jahed'},{isPublished: true}])
    // .and ([{author:'Jahed',isPublished: true}])


//Start with Jahed
// .find({author:/^Jahed/})

//End with Hossen
// .find({author: /Jahed$/i})

//Contain anywhere Jahed
// .find({author: /.*Jahed.*/i})


//pagination 
 .find({author:'Jahed',isPublished: true})
 .skip((pageNumber -1) * pageSize)
    .limit(pageSize)
    .sort({name:1})
    // .select({name:1,tags:1})
    .count();
    console.log(courses);
  }

//  getCourses();








async function updateCourse(id) {
  const courseEdit = await Course.findById(id);
  if (!courseEdit) return;

  courseEdit.isPublished = true;
  courseEdit.author = "Another Course";

  const result = await courseEdit.save();
  console.log(result);
}

// updateCourse("60805b31ce81b718d00740c1");











async function deleteId(id){
    // const corseDelete = await Course.deleteOne({_id:id });
    // const result = await Course.deleteMany({_id:id});
    const resultdelet = await Course.findByIdAndRemove(id);
    
console.log(resultdelet)

};

// deleteId("60805b31ce81b718d00740c1");











