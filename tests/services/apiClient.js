'use strict';

import * as ApiClient from 'services/apiClient.js';

jest.useFakeTimers();

describe('getWordOfTheDay', () => {
    it('returns a promise', () => {
        let promise = ApiClient.getWordOfTheDay();
        expect(typeof promise.then).toBe('function');
    });

    it('resolves after timeout', () => {
        let promise = ApiClient.getWordOfTheDay();
        promise.then((data) => {
            expect(data).toBeDefined();
        });

        jest.runAllTimers();

        return promise;
    });
});
