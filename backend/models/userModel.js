import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const userModel = mongoose.models.user || mongoose.model("use",userSchema)
export default userModel;