module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/e2e/"],
};
