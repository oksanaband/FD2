function Cesar (text) {
    let encryptedText = '';
    text=prompt("enter your message")
    shift=3;

    for (let word of text) {
        if (word.match(/[a-z]/i)) { // Проверяем, является ли символ буквой
            const code = word.charCodeAt(0);
            encryptedText += String.fromCharCode(code + shift);
        } else {
            encryptedText += word; // Не изменяем не буквенные символы
        }
    }

    alert(encryptedText);
}

Cesar();