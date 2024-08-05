const secretKey = 'my-secret-key';

function aesEncrypt(text) {
    const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
    return encrypted;
}

function aesDecrypt(encryptedText) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}
