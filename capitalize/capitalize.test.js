const capitalize = require('./capitalize');

test('hello world to equal Hello world',()=>{
    expect(capitalize('hello world')).toBe('Hello world');

});

