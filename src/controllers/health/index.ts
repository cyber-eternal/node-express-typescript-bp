import { Request, Response } from 'express';

export function healthController(req: Request, res: Response) {
  const now = new Date();
  res.json({
    status: 'OK',
    date: `${now.toLocaleTimeString()} ${now.toLocaleDateString()}`,
  });
}
