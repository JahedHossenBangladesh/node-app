const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecting to db"))
  .catch((err) => console.error("could not find mongodb .error is ", err));


const Author = mongoose.model('Author',new mongoose.Schema({
    name:String,
    bio:String,
    website:String
}));

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref :'Author'
                },
  })
);

async function createAuthor(name,bio,website){
    const author = new Author({
        name,
        bio,
        website,
    });
    const result = await author.save();
    console.log(result);
}

async function createCourse(name,author){
    const course = new Course({
        name,
        author
    });
    const result = await course.save();
    console.log(result);

}

async function listCourse() {
    const courses = await Course
    .find()
    .populate('author','name -_id')
    .select('name author')
    console.log(courses)
}

// createAuthor('Mosh','dev','go.com');

// createCourse("node course", "60886ec6b9586e148c5627c9");

listCourse();

