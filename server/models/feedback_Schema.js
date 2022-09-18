import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const feedback_Schema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 Q1:{
  type: Number,
  required: true
},
Q2:{
    type: Number,
    required: true
  },
  Q3:{
    type: Number,
    required: true
  },
  Q4:{
    type: Number,
    required: true
  },
  Q5:{
    type: Number,
    required: true
  },
  Q6:{
    type: Number,
    required: true
  },
  Q7:{
    type: Number,
    required: true
  },
  Q8:{
    type: Number,
    required: true
  },
  Q9:{
    type: Number,
    required: true
  },
  message:{
    type: String,
  }
});

const feedb=mongoose.model('feedback',feedback_Schema);
export default feedb;
// //  module.exports = feedb;
