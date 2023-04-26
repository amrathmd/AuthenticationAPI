const express=require('express');
const router=express.Router();
const fs=require('fs');
const User=require('../../db/db');
const bcrypt=require('bcrypt');


router.route('/').post(async (req,res)=>{
    const data = req.body;
    console.log(data);
    const user = await User.findOne({ email: req.body.email });
    try {
      if (user) {
        return res.json({ message: 'User already exists' ,success: false});
      }
      bcrypt.hash(req.body.password,10,async(err,hash)=>{
        if(hash){
        const newUser = await User.create({
          username:req.body.username,
          password: hash,
          email: req.body.email
        });
        return res.status(200).send({ message: 'Registered Successfully' ,success: true});
      }
      else{
        return res.json({ message: 'Not registered there is a error in the server' , success: false});
      }
       
      });}

      catch (err) {
        return res.json({ message: 'Not registered there is a error in the server' , success: false});
      }
     
  });
  



module.exports=router;