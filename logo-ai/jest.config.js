module.exports = {
  preset: "jest-expo",
  testMatch: ["<rootDir>/**/*.test.{tsx,ts}"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|nts/|nanoid)",
  ],
  collectCoverageFrom: ["src/**/*"],
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  setupFilesAfterEnv: ["<rootDir>/mocks/jest-setup.tsx"],
  clearMocks: true,
  resetMocks: true,
};
