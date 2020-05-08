const caesarCipher = require('./caesarCipher');

test('encrypts the word and returns the result',()=>{
    expect(caesarCipher('hello',1)).toBe('ifmmp');
});

test('it wraps around correctly when at the end of the alphabet',()=>{
    expect(caesarCipher('z',1)).toBe('b');
});

test('it keeps the lower/upper case',()=>{
    expect(caesarCipher('Hello',1)).toBe('Ifmmp');
});

test('punctuation stays intact',()=>{
    expect(caesarCipher('Hello,World!',1)).toBe('Ifmmp,Xpsme!');
});

