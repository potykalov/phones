/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.js", "!src/**/__tests__/**"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
  verbose: true,
};

export default config;
