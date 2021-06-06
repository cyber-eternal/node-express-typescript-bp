import { Request, Response, NextFunction } from 'express';

export const internalServerError = (err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ status: 'fail', message: 'Internal Server Error', error: err });
};
