import { validationResult } from 'express-validator';import xss from 'xss';
export function sanitizeBody(req,_res,next){if(req.body)for(const k of Object.keys(req.body))if(typeof req.body[k]==='string')req.body[k]=xss(req.body[k].trim());next()}
export function validate(req,res,next){const errors=validationResult(req);if(!errors.isEmpty())return res.status(422).json({errors:errors.array()});next()}
