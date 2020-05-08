const reverse = require('./reverse');

test('hello',()=>{
    expect(reverse('hello')).toBe('olleh');
});

test('Howdy',()=>{
    expect(reverse('Howdy')).toBe('ydwoH');
});

test('Hello World',()=>{
    expect(reverse('Hello World')).toBe('dlroW olleH');
});

