import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const event_Schema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 event_name:{
  type: String,
  required: true
},
 event_coordinator:{
  type: String,
  required: true
},
 mob_number:{
  type: Number,
  required: false
},
date:{
  type: Date,
  required: true
},
event_time:{
  type: String,
  required: true
},
event_venue:{
    type: String,
    required: true
  },
  club:{
    type: String,
    required: true
  },
  event_details:{
    type: String,
    required: false
  },
  event_budget:{
    type: Number,
    required: true
  }
});

const eve=mongoose.model('event',event_Schema);
export default eve;
