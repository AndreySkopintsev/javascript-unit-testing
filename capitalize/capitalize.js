function capitalize(word) {
    if(word !== ''){
        return word.slice(0,1).toUpperCase() + word.slice(1)
    }
    else{
        return 'Please enter a word'
    }
    
}

module.exports = capitalize;