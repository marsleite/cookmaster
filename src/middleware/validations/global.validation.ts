import { NextFunction, Request, Response } from "express";
import AppError from "../../shared/error/AppError";

export class Validation {
  
  async validName(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
  
    if (name === undefined) {
      throw new AppError('Invalid entries. Try again.');
    }
  
    return next();
  }

  async validEmail(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
  
    if (email === undefined) {
      throw new AppError('Invalid entries. Try again.');
    }

    if (!email.includes('@')) {
      throw new AppError('Invalid entries. Try again.');
    }
  
    return next();
  }

}
