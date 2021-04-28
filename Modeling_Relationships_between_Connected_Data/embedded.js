const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser:true,useUnifiedTopology: true})
.then(() => console.log('db is connect'))
.catch ((err) => console.error('the error is ',err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio:String,
    website: String,
})

const Author = mongoose.model('Author',authorSchema);
const Course = mongoose.model('Course',new mongoose.Schema({
    name: String,
    author: [authorSchema]
}))

async function createAuthor(name,bio,website){
    const author = new Author({
        name,
        bio,
        website
    });
    const result = await author.save();
    console.log(result);
}



async function createCourse(name, author) {
  const course = new Course({
    name,
    author
  })
  const result = await course.save();
  console.log(result);
}
// createAuthor('Jahed','dfd','eee');
async function addAuthor(courseId,author){
    const course = await Course.findById(courseId);
    course.author.push(author);
    course.save();
}

async function removeAuthor(courseId, authorId){
    const course = await Course.findById(courseId);
    const author = course.author.id(authorId);
    author.remove();
    course.save();
}

// createCourse("Js", [
//   new Author({ name: "Mosh" }),
//   new Author({ name: "Jahed" }),
// ]);

removeAuthor("60899b870477272434e70e0c", "6089a361c49efc0c10b25076");

