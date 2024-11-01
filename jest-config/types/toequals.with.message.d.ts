declare module 'expect' {
    interface Matchers<R> {
        toEqualWithMessage(expected: any, customMessage?: string): R;
    }
}

export {};