import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const scholarship_Schema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 student_name:{
  type: String,
  required: true
},
 email:{
  type: String,
  required: false
},
 mob_number:{
  type: Number,
  required: false
},
department:{
  type: String,
  required: true
},
income:{
  type: Number,
  required: true
},
cast:{
    type: String,
    required: true
  },
  grade:{
    type: String,
    required: true
  }
});

const scholar=mongoose.model('certificate',scholarship_Schema);
export default scholar;
// module.exports = arch_meet;
