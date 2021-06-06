module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '\\.(spec|test)\\.ts?$',
  moduleFileExtensions: ['js', 'ts'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
  clearMocks: true,
  forceExit: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/app.ts',
    '!src/data/**/*.ts',
    '!src/services/database/*.ts',
    '!src/utils/logger/*.ts',
    '!src/routes/**/*.ts',
    '!src/config/params/*.ts',
    '!src/config/environment/schemas/*.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  reporters: ['default', './tools/coverage-total-reporter.js'],
  coverageThreshold: {
    src: {
      branches: 75,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coveragePathIgnorePatterns: ['./src/middlewares/error/validationError.*.ts'],
};
