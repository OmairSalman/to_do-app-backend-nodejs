import * as express from 'express';

export interface TokenPayload
{
    id: string
}

declare global {
  namespace Express {
    interface Request {
      userId?: TokenPayload;
    }
  }
}