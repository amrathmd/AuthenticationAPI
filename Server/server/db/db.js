const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const joi=require('joi');

const UserSchema=new Schema({
  username:joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
  email: joi.string().email()
});

const User=mongoose.model('user',UserSchema);

module.exports=User;
