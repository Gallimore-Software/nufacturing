// jest.config.js
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^@env/(.*)$": "<rootDir>/src/environments/$1",
  },
};
