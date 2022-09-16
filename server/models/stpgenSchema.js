import mongoose from "mongoose";
// import './models/stpgenSchema.js';

const stpgenSchema = new mongoose.Schema({
  Student_name: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: false,
  },
  Blood_group: {
    type: String,
    required: false,
  },
  DOB: {
    type: Date,
    required: true,
  },
  PWD: {
    type: String,
    required: false,
  },
  Email: {
    type: String,
    required: true,
  },
  Mobile_no: {
    type: String,
    required: true,
  },
  Alt_mobile_no: {
    type: String,
    required: false,
  },
  Aadhar_no: {
    type: String,
    required: false,
  },
  Religion: {
    type: String,
    required: false,
  },
  Mother_tongue: {
    type: String,
    required: false,
  },

  Father_name: {
    type: String,
    required: false,
  },
  Father_email: {
    type: String,
    required: false,
  },
  Father_occupation: {
    type: String,
    required: false,
  },
  Father_Mobile_no: {
    type: String,
    required: false,
  },
  Mother_name: {
    type: String,
    required: false,
  },
  Mother_email: {
    type: String,
    required: false,
  },
  Mother_occupation: {
    type: String,
    required: false,
  },
  Mother_mobile_no: {
    type: Number,
    required: false,
  },
});

const Student = mongoose.model("student", stpgenSchema);

export default Student;
