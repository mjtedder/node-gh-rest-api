const { retrievePRNumbers, storeUserData } = require('../utils');
const db = require('../db/db.json');

test('sorts numbers in ascending order', () => {
    expect(retrievePRNumbers([{number: 9}, {number: 4}, {number: 7}])).toStrictEqual([4, 7, 9])
});

test('the data is written to the db', () => {
    expect(storeUserData({owner: 'owner', repo: 'repo'})).toBe(db);
});