function isPalindrome(str) {
    // Remove espaços, pontuações e transforma a string para minúsculas
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Verifica se a string é igual à sua versão invertida
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

module.exports = isPalindrome;

// Exemplos de uso
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // true (uma string vazia é considerada palíndroma)

