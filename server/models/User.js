const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateAuthToken } = require('../utils/check-auth');

const userSchema = new mongoose.Schema(
  {
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
    googleId:{
      type:String,
      default:null
    },
    avatar: {
      type: String,
      default: null,
    },
    phone: {
      type: Number,
      default: null,
    },
    address: {
      type: String,
      default: null,
    },
    postal: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      minlength: [8, 'Minimum password length is 8 characters.'],
      required: true,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
  this.token = generateAuthToken(this);
  next();
});

module.exports = mongoose.model('User', userSchema);
