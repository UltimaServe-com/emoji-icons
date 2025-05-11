const test = require('ava');
const icons = require('../index.js');


test('icons object should exist and be an object', t => {
    t.truthy(icons);
    t.is(typeof icons, 'object');
});

test('no empty keys or values in icons object', t => {
    for (const [key, value] of Object.entries(icons)) {
        t.truthy(key.trim(), `Key should not be empty: "${key}"`);
        t.truthy(value.trim(), `Value for "${key}" should not be empty`);
    }
});
