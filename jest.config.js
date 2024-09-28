// jest.config.js
module.exports = {
  preset: "jest-preset-angular",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/e2e/"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: {
        before: [
          "jest-preset-angular/build/InlineFilesTransformer",
          "jest-preset-angular/build/StripStylesTransformer",
        ],
      },
    },
  },
  moduleFileExtensions: ["ts", "html", "js", "json"],
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@ngrx)"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^@env/(.*)$": "<rootDir>/src/environments/$1",
  },
};
