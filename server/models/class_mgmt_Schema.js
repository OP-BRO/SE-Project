import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const class_mgmt_Schema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 course:{
  type: String,
  required: true
},
 date:{
  type: Date,
  required: true
},
 slot:{
  type: Number,
  required: true
},
classroom:{
  type: String,
  required: true
}
});

const class_mgmt=mongoose.model('classroom',class_mgmt_Schema);
export default class_mgmt;
// module.exports = arch_meet;
