// Jest configuration for running tests in a TypeScript project
export default {
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  }, // strip .js extensions added by tsc -- only for Jest
  preset: "ts-jest", // Use ts-jest preset for TypeScript support
  roots: ["<rootDir>/tests"], // Look for tests in the 'tests' directory
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Include Jest setup file
  testEnvironment: "node", // Run tests in a Node.js environment
  testMatch: ["<rootDir>/tests/*.test.ts"], // Match files ending in .test.ts
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform TypeScript files using ts-jest
  },
};
