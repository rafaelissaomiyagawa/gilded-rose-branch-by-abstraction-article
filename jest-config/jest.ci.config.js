export default {
    rootDir: '../',
    transform: {},
    setupFilesAfterEnv: ["./jest-config/jest.setup.js"],
    reporters: [
        "default",
        [
            "jest-junit",
            {outputDirectory: "./test-reports/jest-junit", outputName: "js-results.xml"}
        ]
    ],
    collectCoverage: true,
    coverageDirectory: './test-reports/coverage',
}