const calculator = require('./calculator');

test('expect 1+2 to equal 3',()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('expect 5-4 to equal 1',()=>{
    expect(calculator.subtract(5,4)).toBe(1);
});

test('expect 3x3 to equal 9',()=>{
    expect(calculator.multiply(3,3)).toBe(9);
});

test('expect 8/2 to equal 4',()=>{
    expect(calculator.divide(8,2)).toBe(4);
});
