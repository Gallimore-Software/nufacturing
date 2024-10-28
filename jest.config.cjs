module.exports = {
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/e2e/'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'], // Points to Jest setup file
  globalSetup: 'jest-preset-angular/global-setup', // Required for Angular-specific setup
  testEnvironment: 'jsdom', // Set up DOM environment for browser-like tests
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json', // Points to TypeScript config for tests
      stringifyContentPathRegex: '\\.html$', // Handles HTML templates in Angular components
    },
  },
  extensionsToTreatAsEsm: ['.ts'], // Treat TypeScript files as ES modules
  moduleFileExtensions: ['ts', 'html', 'js', 'json'], // Supported file extensions
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest', // Use ts-jest for TypeScript and HTML files
  },
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|@angular|jest-preset-angular)',
  ], // Ensures Jest processes ES modules in node_modules
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1', // Custom path mappings
    '^@env/(.*)$': '<rootDir>/src/environments/$1',
  },
};
