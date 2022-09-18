import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const invite_Schema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 student_name:{
  type: String,
  required: true
},
 email:{
  type: String,
  required: false
},
type:{
  type: String,
  required: false
},
details:{
  type: String,
  required: true
},
});

const invite=mongoose.model('invite',invite_Schema);
export default invite;
// module.exports = arch_meet;
