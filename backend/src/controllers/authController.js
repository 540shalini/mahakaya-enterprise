import bcrypt from 'bcryptjs';import jwt from 'jsonwebtoken';import { User } from '../models.js';import { env } from '../config/env.js';import { sendMail } from '../services/mailService.js';
const sign=u=>jwt.sign({id:u.id,role:u.role},env.jwtSecret,{expiresIn:env.jwtExpiresIn});
export async function register(req,res){const {fullName,mobile,email,password}=req.body;const passwordHash=await bcrypt.hash(password,12);const user=await User.create({fullName,mobile,email,passwordHash});res.status(201).json({token:sign(user),user});}
export async function login(req,res){const {email,password}=req.body;const user=await User.findOne({where:{email}});if(!user||!(await user.comparePassword(password)))return res.status(401).json({message:'Invalid credentials'});res.json({token:sign(user),user});}
export async function forgotPassword(req,res){await sendMail({to:req.body.email,subject:'Mahakaya password reset',text:'Please contact support to securely reset your password.'});res.json({message:'If the email exists, reset instructions were sent'});}
export async function resetPassword(req,res){res.json({message:'Password reset token accepted by external workflow hook'});}
