import mongoose, { Model , Schema , model } from 'mongoose';

interface User {



}

const userSchema = new Schema<User>({

})

const userModel:Model<User> = mongoose.model("users" , userSchema)