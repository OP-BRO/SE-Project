import mongoose from 'mongoose';
// import './models/stpgenSchema.js';

const stpadmSchema = new mongoose.Schema({
    Board: {
        type: String,
        required: true
    }, 
    Department: {
        type: String,
        required: true
    }, 
    Degree: {
        type: String,
        required: true
    }, 
    JEE_adv_Roll_no: {
        type: String,
        required: false
    },
    JEE_adv_rank: {
        type: String,
        required: true
    }, 
    JEE_adv_year: {
        type: String,
        required: true
    },
    Admit_cat: {
        type: String,
        required: true
    },

    JEE_mains_Roll_no: {
        type: String,
        required: true
    }

})

const Studentadm = mongoose.model('studentadm' , stpadmSchema);

export default Studentadm;