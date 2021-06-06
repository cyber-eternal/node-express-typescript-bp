import 'config/environment/variables';

describe('serviceEnvironment', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should export object with correct keys', () => {
    const serviceConfig = require('./service').default;

    expect(serviceConfig).toMatchObject({
      projectName: expect.any(String),
      env: expect.any(String),
      port: expect.any(Number),
      baseApiUrl: expect.any(String),
      database: {
        host: expect.any(String),
        port: expect.any(Number),
        database: expect.any(String),
        user: expect.any(String),
        password: expect.any(String),
        charset: expect.any(String),
        collate: expect.any(String),
        logging: expect.any(Function),
      },
    });
  });

  it('should throw when there is a validation error', () => {
    jest.doMock('config/environment/variables', () => ({
      notValidKey: 'notValidKey',
    }));

    expect(() => {
      require('config/environment/service');
    }).toThrowError();
  });
});
