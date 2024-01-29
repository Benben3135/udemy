import mongoose, { Model , Schema , model } from 'mongoose';

interface Teacher {



}

const teacherSchema = new Schema<Teacher>({

})

const userModel:Model<Teacher> = mongoose.model("users" , teacherSchema)