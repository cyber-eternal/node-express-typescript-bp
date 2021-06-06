import httpMocks from 'node-mocks-http';

import { notFoundController } from 'controllers/notfound';

describe('notFoundController', () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    res.status = jest.fn((status: number) => res);
    res.json = jest.fn();
  });

  it(`should call res.send() with 404 status code`, () => {
    notFoundController(req, res);

    expect(res.status).toBeCalledWith(404);
    expect(res.json).toBeCalledWith({
      status: 'fail',
      message: 'Not Found',
    });
  });
});
