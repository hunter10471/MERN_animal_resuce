const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  postal: String,
  country: String,
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, 'Username is already in use.'],
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email is already in use.'],
  },
  avatar:{
    type:String,
    default:null
  },
  phone:{
    type: Number,
    default: null
  },
  address: {
    type: addressSchema,
    default: null,
  },
  isAdmin: {
    type:Boolean,
    required: true,
    default: false,
  },
  password: {
    type: String,
    minlength:[8, 'Minimum password length is 8 characters.'],
    required: true,
  },
},{timestamps:true});

userSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password,salt);

});


module.exports = mongoose.model('User',userSchema);