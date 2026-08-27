import { app } from './app.js';import { connectDatabase } from './config/database.js';import { env } from './config/env.js';import './models.js';
connectDatabase().then(()=>app.listen(env.port,()=>console.log(`Mahakaya API running on ${env.port}`))).catch(error=>{console.error('Database connection failed',error);process.exit(1)});
