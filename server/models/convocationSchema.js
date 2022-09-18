import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const ConvocationSchema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 Candidatename:{
  type: String,
  required: true
},
 Degree:{
  type: String,
  required: true
},
 Department:{
  type: String,
  required: true
},
 Email:{
  type: String,
  required: false
},
 DOB:{
  type: Date,
  required: true
},
 Mob_no:{
  type: String,
  required: false
},
 Payment_type:{
  type: String,
  required: true
}
});

const convo = mongoose.model('convocation',ConvocationSchema);
export default convo;
// module.exports = convo;
