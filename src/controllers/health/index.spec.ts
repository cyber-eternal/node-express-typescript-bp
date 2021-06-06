import httpMocks from 'node-mocks-http';

import { healthController } from 'controllers/health';

const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

describe('healthController', () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();

    res.json = jest.fn();
  });

  it(`should call res.send() with status object`, async () => {
    healthController(req, res);

    await sleep(100);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'OK',
      }),
    );
  });
});
