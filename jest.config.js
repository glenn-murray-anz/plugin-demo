module.exports = (config) => {
  config = {
    ...config,
    verbose: true,
    collectCoverage: true,
    rootDir: ".",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "-helper"
    ],
    testPathIgnorePatterns: [
      "/node_modules/"
    ],
    testEnvironment: "jsdom",
    testRunner: "jest-jasmine2",
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    coverageThreshold: {
      global: {
        statements: 26,
        branches: 9,
        functions: 16,
        lines: 26
      }
    },
    transformIgnorePatterns: [
      "node_modules/(?!wavesurfer)"
    ],
    moduleNameMapper: {
      "\\.(css|sass)$": "identity-obj-proxy"
    }
  };
  return config;
}
