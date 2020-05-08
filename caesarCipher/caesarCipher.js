
const caesarCipher = (text,cipher) => {
    let letters = text.split('');
    let encryptedWord = [];
    letters.forEach(letter => {
        let code;
        if(letter.charCodeAt()>=97 && letter.charCodeAt() <=122){
            if(letter.charCodeAt() === 122){
                code = 97 + cipher;
            }else{
                code = letter.charCodeAt() + cipher;
            }
            
        }else if(letter.charCodeAt()>=65 && letter.charCodeAt()<=90){
            if(letter.charCodeAt() === 90){
                code = 65 + cipher;
            }else{
                code = letter.charCodeAt() + cipher;
            }
        }else{
            code = letter.charCodeAt();
        }
        encryptedWord.push(String.fromCharCode(code));
    });
    return encryptedWord.join('');
}

module.exports = caesarCipher;