import * as WordOfTheDay from 'actions/wordOfTheDay.js';
import * as ApiClient from 'services/apiClient.js';

it('exposes set method', () => {
    expect(WordOfTheDay.set('abc', 'xyz')).toEqual({
        type: WordOfTheDay.SET_WORD_OF_THE_DAY,
        word: 'abc',
        definition: 'xyz'
    });
});

describe('fetch data', () => {
    it('returns a thunk', () => {
        expect(typeof WordOfTheDay.fetch()).toBe('function');
    });

    it('dispatches the set action', () => {
        let dispatch = jest.fn();
        let then = jest.fn();

        ApiClient.getWordOfTheDay = jest.fn(() => {
            return {
                then
            }
        });

        WordOfTheDay.fetch()(dispatch);

        then.mock.calls[0][0]({
            word: 'abc',
            definition: 'xyz'
        });
        expect(dispatch).toBeCalledWith(WordOfTheDay.set('abc', 'xyz'));
    });
});
