import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const alumni_management_Schema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 student_name:{
  type: String,
  required: true
},
 email:{
  type: String,
  required: false
},
department:{
  type: String,
  required: true
},
course:{
  type: String,
  required: true
},
grad_year:{
    type: Date,
    required: true
  },
details:{
    type: String,
    required: false
  }
});

const almgmt=mongoose.model('alumni',alumni_management_Schema);
export default almgmt;
// module.exports = arch_meet;
