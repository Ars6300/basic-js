class VigenereCipheringMachine {
    constructor(direct){
        this.direct = direct;
    }
    encrypt(message, key) {
        if(!message || !key){ throw new Error};
        let regex = /[A-Z]/;
        let arrayMessage = this.direct == false ? message.toUpperCase().split('').reverse() : message.toUpperCase().split('');
        let arrayForKey = key.toUpperCase().split('');
        let arrayKey = [];
        for(let c = 0; c < arrayMessage.length; c++){
          if(arrayForKey[c] && regex.test(arrayMessage[c])){
          arrayKey.push(arrayForKey[c])
          }
          else if(regex.test(arrayMessage[c])){
          arrayKey.push(arrayForKey[c - arrayForKey.length])
          }
          else{
          arrayKey.push(' ');
          
          }
        }
        return arrayKey;
    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key){ throw new Error};

    }
}

module.exports = VigenereCipheringMachine;
