const arrayAnalysis = require('./arrayAnalysis');

test('analyze an array [2,3,4,8]',()=>{
    expect(arrayAnalysis([2,3,4,8])).toEqual(
        {
            average:4.25,
            max:8,
            min:2,
            length:4
        }
    )
});

