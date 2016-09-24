'use strict';

import * as ApiClient from 'services/apiClient.js';

export const SET_WORD_OF_THE_DAY = 'SET_WORD_OF_THE_DAY';

export function fetch() {
    return (dispatch) => {
        return ApiClient.getWordOfTheDay().then((data) => {
            dispatch(set(data.word, data.definition));
        });
    };
}

export function set(word, definition) {
    return {
        type: SET_WORD_OF_THE_DAY,
        word,
        definition
    };
}
