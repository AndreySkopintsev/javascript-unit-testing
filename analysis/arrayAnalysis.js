function arrayAnalysis(array){
    let average = array.reduce((acc,num)=>acc+=num,0) / array.length;
    let max = Math.max(...array);
    let min = Math.min(...array);

    return (
        {
            average:average,
            max:max,
            min:min,
            length:array.length
        }
    )
}

module.exports = arrayAnalysis;

