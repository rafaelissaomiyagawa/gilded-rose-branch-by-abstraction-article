import {expect} from "@jest/globals";

expect.extend({
    toEqualWithMessage
});

// ANSI escape codes for coloring text
const RESET = "\x1b[0m"; // Reset to default
const GREEN = "\x1b[32m"; // Green text
const RED = "\x1b[31m";   // Red text

function toEqualWithMessage(received, expected, customMessage = "Failed") {
    const pass = this.equals(received, expected);

    const errorMessage = `${customMessage} - Expected ${GREEN}${expected}${RESET}, but it was ${RED}${received}${RESET}`;
    const successMessage = `Expected ${GREEN}${expected}${RESET} but it was ${RED}${received}${RESET}`;

    if (pass) {
        return {
            message: () => `🌟 ${successMessage}`,
            pass: true,
        };
    } else {
        return {
            message: () => `❌ ${errorMessage}`,
            pass: false,
        };
    }
}