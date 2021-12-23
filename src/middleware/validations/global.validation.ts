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

}
