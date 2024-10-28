module.exports = {
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/e2e/'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'], // The setup-jest file should be configured properly
  globalSetup: 'jest-preset-angular/global-setup',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'], // Treat TypeScript files as ESModules
  globals: {
    'ts-jest': {
      useESM: true, // Enable ESM in ts-jest
      tsconfig: 'tsconfig.spec.json', // Ensure the correct tsconfig is used
      stringifyContentPathRegex: '\\.html$',
    },
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest', // Transform TypeScript and HTML files with ts-jest
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@env/(.*)$': '<rootDir>/src/environments/$1',
  },
};
