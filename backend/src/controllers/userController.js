import { Loan,Payment,EmiSchedule,Notification } from '../models.js';
export const profile=(req,res)=>res.json(req.user);
export async function updateProfile(req,res){await req.user.update(req.body);res.json(req.user)}
export async function dashboard(req,res){const loans=await Loan.findAll({where:{UserId:req.user.id},include:[Payment,EmiSchedule]});const notifications=await Notification.findAll({where:{UserId:req.user.id},order:[['createdAt','DESC']]});res.json({profile:req.user,loans,notifications});}
