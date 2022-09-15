import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
// import './models/dumSchema.js';

const dummy = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    },
    tokens: [
        {
            token:{
                type:String,
                required: true
            }
        }
    ] 

})

dummy.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
});

//jwt token 
dummy.method.generateAuthToken = async function(next) {
    try{
        let tokenkey = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.token = this.token.concat({token:tokenkay})
    }catch(error){
        console.log(err);
    }
}

const  dum = mongoose. model('dummy' , dummy);

export default dum;