import { User,Loan,Payment,ContactMessage } from '../models.js';import { sequelize } from '../config/database.js';
export async function stats(_req,res){const [users,loans,payments,messages]=await Promise.all([User.count(),Loan.count(),Payment.sum('amount',{where:{status:'paid'}}),ContactMessage.count({where:{status:'new'}})]);res.json({users,loans,revenue:payments||0,messages});}
export async function analytics(_req,res){const loansByStatus=await Loan.findAll({attributes:['status',[sequelize.fn('COUNT',sequelize.col('id')),'count']],group:['status']});res.json({loansByStatus});}
export async function reports(_req,res){res.json({generatedAt:new Date(),summary:'Operational report ready',exportFormats:['json','csv']});}
export async function users(_req,res){res.json(await User.findAll({order:[['createdAt','DESC']]}));}
