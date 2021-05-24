const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/Mongo-Exercises")
    .then(()=>console.log("connected to mongodb"))
    .catch(err=>console.log(err));

const CoursesSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:Date,
    isPublished:Boolean,
    price:Number


})

const courses =new mongoose.model('courses',CoursesSchema);

//my answer modified with sir answer
async function getCourses(){
   //get all published courses
    //sort by their name
    //pick name and author only
    const courseDetails = await courses.find({tags:'backend',isPublished:true})
        .sort({name:1})
        .select({name:1,author:1})

    console.log(courseDetails);
}

getCourses();