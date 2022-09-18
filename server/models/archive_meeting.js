import mongoose from 'mongoose';
// const mongoose =require('mongoose');

const Archive_meetingSchema= new mongoose.Schema({
  
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

const arch_meet=mongoose.model('archive_meeting',Archive_meetingSchema);
export default arch_meet;
// module.exports = arch_meet;
