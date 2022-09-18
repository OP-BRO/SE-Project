import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const bap_meetingSchema= new mongoose.Schema({
  
  // _id : mongoose.Schema.Types.ObjectId,

 meeting_name:{
  type: String,
  required: true
},
 meeting_agenda:{
  type: String,
  required: false
},
 cometee_type:{
  type: String,
  required: true
},
 meeting_date:{
  type: Date,
  required: true
}
});

const bap_meet=mongoose.model('bap_meet',bap_meetingSchema);
export default bap_meet;
// module.exports = arch_meet;
