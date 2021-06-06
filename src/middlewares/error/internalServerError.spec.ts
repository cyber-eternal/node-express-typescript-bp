import { NextFunction } from 'express';
import httpMocks from 'node-mocks-http';

import { internalServerError } from './index';

describe('internalServerError', () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;
  let nextFn: NextFunction;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    nextFn = jest.fn();
    res.status = jest.fn((status: number) => res);
    res.json = jest.fn();
  });

  it(`should call res.send() with 500 status code and error`, () => {
    const error = 'test error';

    internalServerError(error, req, res, nextFn);

    expect(res.status).toBeCalledWith(500);
    expect(res.json).toBeCalledWith({
      status: 'fail',
      message: 'Internal Server Error',
      error,
    });
  });
});
