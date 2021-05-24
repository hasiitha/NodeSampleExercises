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


async function getCourses(){
    const courseDetails = await courses.find();
    console.log(courseDetails);
}

getCourses();