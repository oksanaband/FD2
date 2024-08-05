function generateRandomPassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars) {
    // Задаем набор символов
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterSet = ''; // Набор символов, из которых будет генерироваться пароль

    // Добавляем выбранные символы в набор
    if (useUppercase) characterSet += uppercaseChars;
    if (useLowercase) characterSet += lowercaseChars;
    if (useNumbers) characterSet += numberChars;
    if (useSpecialChars) characterSet += specialChars;

    // Проверка, что есть символы для генерации
    if (characterSet.length === 0) {
        throw new Error("Необходимо выбрать хотя бы один набор символов");
    }

    let password = '';

    // Генерация пароля
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}
