import mongoose, { Model , Schema , model } from 'mongoose';

interface Course {



}

const courseSchema = new Schema<Course>({

})

const userModel:Model<Course> = mongoose.model("users" , courseSchema)