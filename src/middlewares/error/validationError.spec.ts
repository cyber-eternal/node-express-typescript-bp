import { NextFunction } from 'express';
import httpMocks from 'node-mocks-http';

import { validationError } from './index';

describe('validationError', () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;
  let nextFn: NextFunction;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    nextFn = jest.fn();
  });

  it('should call next() with error when error is not instance of ValidationError', () => {
    const error = 'test error';

    validationError(error, req, res, nextFn);

    expect(nextFn).toHaveBeenCalledWith(error);
  });
});
