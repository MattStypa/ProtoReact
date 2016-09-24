'use strict';

export function getWordOfTheDay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                word: 'Hello!',
                definition: 'Is it me you\'re looking for?'
            });
        }, 2000);
    });
}
