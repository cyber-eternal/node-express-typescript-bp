import { Request, Response } from 'express';

export const notFoundController = (req: Request, res: Response) => {
  return res.status(404).json({ status: 'fail', message: 'Not Found' });
};
