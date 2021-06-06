describe('variablesEnvironment', () => {
  let initialValue: string | undefined;

  beforeEach(() => {
    jest.resetModules();

    initialValue = process.env.LOG_TYPES;
  });

  afterEach(() => {
    process.env.LOG_TYPES = initialValue;
  });

  it('should return array with "console" if no value is passed', () => {
    process.env.LOG_TYPES = '';

    expect(require('config/environment/variables').default).toHaveProperty('LOG_TYPES', ['console']);
  });

  it('should return array of splitted string values', () => {
    process.env.LOG_TYPES = 'file,console';

    expect(require('config/environment/variables').default).toHaveProperty('LOG_TYPES', ['file', 'console']);
  });
});
