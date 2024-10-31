import Notifier from 'node-notifier';
import * as process from "node:process";

export default class NotifierReporter {
    onRunComplete(contexts, results) {
        const isLocal = process.env.NODE_ENV === 'continuous-testing';
        if (!isLocal) {
            return;
        }

        if (results.numFailedTests > 0) {
            Notifier.notify({
                title: '❌ Tests Failed',
                message: `${results.numFailedTests} test(s) failed.`,
            });
        } else {
            Notifier.notify({
                title: '✅ Tests Passed',
                message: 'All tests passed successfully!',
            });
        }
    }
}