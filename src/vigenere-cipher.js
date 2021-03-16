const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(revert){
    this.revert = revert ? true : false;
    if (typeof revert == 'undefined') {
      this.revert = true;
    }
  }
  encrypt(message, key) {
    if (message && key) {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let newMessage = message.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
      newMessage = newMessage.replace(/\s/g,'');
      let strComp = '';
      if (key.length > newMessage.length) {
        strComp = key.substring(0,newMessage.length).toUpperCase();
      }
      else if (newMessage.length > key.length) {
        let del = Math.ceil(newMessage.length / key.length); 
        for (var i = 0; i < del; i++) {
          strComp += key;
        }
        strComp = strComp.substring(0,newMessage.length).toUpperCase();
      }
      else {
        strComp = key.toUpperCase();
      }
      let encrypted = '';
      for (var i = 0; i < strComp.length; i++) {
        let msgEl = alphabet.indexOf(newMessage[i]);
        let keyEl = alphabet.indexOf(strComp[i]);
        let newEl;
        if (msgEl + keyEl >= 26) {
          newEl = alphabet.charAt(msgEl + keyEl - 26);
        }
        else {newEl = alphabet.charAt(msgEl + keyEl) };
        encrypted += newEl;
      }
      let finalMessage = '';
      let count = 0;
      for (var i = 0; i < message.length; i++) {
        if (alphabet.includes(message[i].toUpperCase())) {
          finalMessage += encrypted[count];
          count++;
        }
        else{
          finalMessage += message[i];
        }
      }
      if (!this.revert) {
        return finalMessage.split('').reverse().join('');
      }
      else {
        return finalMessage;
      }    
    }
    else{
      throw new Error();
    }    
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let newMessage = encryptedMessage.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
      newMessage = newMessage.replace(/\s/g,'');      
      let strComp = '';
      if (key.length > newMessage.length) {
        strComp = key.substring(0,newMessage.length);
      }
      else if (newMessage.length > key.length) {
        let del = Math.ceil(newMessage.length / key.length); 
        for (var i = 0; i < del; i++) {
          strComp += key;
        }
        strComp = strComp.substring(0,newMessage.length).toUpperCase();
      }
      else {
        strComp = key.toUpperCase();
      }

      let finalMessage = '';
      let count = 0;
      for (var i = 0; i < encryptedMessage.length; i++) {
        if (alphabet.includes(encryptedMessage[i])) {
          let msgEl = alphabet.indexOf(encryptedMessage[i]);
          let keyEl = alphabet.indexOf(strComp[count]);          
          let newEl;          
          if (msgEl - keyEl < 0) {
             newEl = alphabet.charAt(msgEl + 26 - keyEl);
          }
          else {
            newEl = alphabet.charAt(msgEl - keyEl);
          }
          count++;
          finalMessage += newEl;
        }
        else { 
          finalMessage += encryptedMessage[i];
        }
      }
      if (!this.revert) {
        return finalMessage.split('').reverse().join('');
      }
      else {
        return finalMessage;
      }
    }
    else{
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
