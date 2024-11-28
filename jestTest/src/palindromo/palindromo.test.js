const isPalindrome = require('./palindromo').default;

describe('isPalindrome', () => {
    test('Reconhece palíndromos em strings simples', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('madam')).toBe(true);
        expect(isPalindrome('level')).toBe(true);
    });

    test('Reconhece palíndromos com letras maiúsculas e minúsculas', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
        expect(isPalindrome('MadAm')).toBe(true);
        expect(isPalindrome('LeVeL')).toBe(true);
    });

    test('Reconhece palíndromos com espaços e pontuação', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
        expect(isPalindrome('No lemon, no melon!')).toBe(true);
        expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    test('Função se previne contra strings vazias, nulas, etc.', () => {
        expect(isPalindrome('')).toBe(true);
        expect(isPalindrome(null)).toBe(false);
        expect(isPalindrome(undefined)).toBe(false);
        expect(isPalindrome(' ')).toBe(true);
    });

    test('Informa quando a string não é um palíndromo', () => {
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('world')).toBe(false);
        expect(isPalindrome('JavaScript')).toBe(false);
    });
});
