export default {
    rootDir: '../',
    transform: {},
    "reporters": [
        "default",
        "./jest-config/jest-notifier-reporter.js"
    ],
    setupFilesAfterEnv: ["./jest-config/jest.setup.js"],
}