import { SET_WORD_OF_THE_DAY } from 'actions/wordOfTheDay';
import WordOfTheDay from 'reducers/wordOfTheDay.js';

it('returns an initial state', () => {
    expect(WordOfTheDay(undefined, {type: null})).toEqual({
        word: '',
        definition: ''
    });
});

it('returns current state', () => {
    expect(WordOfTheDay('state', {type: null})).toEqual('state');
});

it('sets state', () => {
    let initialState = {};
    expect(WordOfTheDay(initialState, {
        type: SET_WORD_OF_THE_DAY,
        word: 'abc',
        definition: 'xyz'
    })).toEqual({
        word: 'abc',
        definition: 'xyz'
    });
    expect(initialState).toEqual({});
});
