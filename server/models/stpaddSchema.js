import mongoose from 'mongoose';
// import './models/stpgenSchema.js';

const stpgenSchema = new mongoose.Schema({
    

    Address1: {
        type: String,
        required: false
    }, 
    Address2: {
        type: String,
        required: false
    }, 
    City: {
        type: String,
        required: false
    }, 
    District: {
        type: String,
        required: false
    }, 
    State: {
        type: String,
        required: false
    }, 
    Country: {
        type: String,
        required: false
    }, 
    Pincode:{
        type: Number,
        required: false
    },
    Nationality: {
        type: String,
        required: false
    }, 
    Same_as:{
        type: Number,
        required: false
    },

    cAddress1: {
        type: String,
        required: false
    }, 
    cAddress2: {
        type: String,
        required: false
    }, 
    cCity: {
        type: String,
        required: false
    }, 
    cDistrict: {
        type: String,
        required: false
    }, 
    cState: {
        type: String,
        required: false
    }, 
    cCountry: {
        type: String,
        required: false
    }, 
    cPincode:{
        type: Number,
        required: false
    },
    Home_town: {
        type: String,
        required: false
    }
})

const Student = mongoose.model('student' , stpgenSchema);
export default Student;