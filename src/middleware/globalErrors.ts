import { Request, Response, NextFunction } from 'express'
import AppError from '../shared/error/AppError'

function globalErrors(err: Error, request: Request, response: Response, next: NextFunction) {

  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      message: err.message,
      data: err?.data
    });
  }

}

export { globalErrors };