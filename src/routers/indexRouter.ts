import indexController from "../controller/indexController";
import { NextFunction, Request, Response } from 'express'; 

const indexRouter = {
    get(req: Request ,res :Response,next: NextFunction ){
        indexController.query( { req,res,next} ) 
    }
}

export default indexRouter