import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const grivance_Schema= new mongoose.Schema({
  
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
  required: false
},
grivance_details:{
  type: String,
  required: true
}
});

const griv =mongoose.model('grivance',grivance_Schema);
export default griv;
//module.exports = griv;
