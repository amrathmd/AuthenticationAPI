const express=require('express');
const router=express.Router();
const User=require('../../db/db');
const bcrypt= require('bcrypt');
const jwt=require('jsonwebtoken');

router.route('/').post( async (req,res)=>{
    const findUser= await User.findOne({email: req.body.email});
    console.log(findUser);
    if(findUser){
        await bcrypt.compare(req.body.password, findUser.password).then((result)=>{
            if(result){
                const token=jwt.sign({data: req.body},'encrpt123',{expiresIn: '1h'});
                res.json({message:'Login Successful', success: true,token});
            }
            else{
                res.json({message: 'Login unsuccessfull, Password or Username incorrect', success: false});
            }  
        })              
    }
    else{
        res.json({message: 'User doesnot exist, better create a account',success: false});
    }
});

module.exports=router;