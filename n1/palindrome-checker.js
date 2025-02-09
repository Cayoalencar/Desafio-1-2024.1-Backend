function palindrome(str) {
    // Remove caracteres especiais e espaços, e converte para minúsculas
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Compara a string limpa com sua versão invertida
    const reversedStr = cleanedStr.split("").reverse().join("");

    // Verifica se é um palíndromo
    if (cleanedStr === reversedStr) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

// Testes
palindrome("eye"); // true
palindrome("A man, a plan, a canal. Panama"); // true
palindrome("hello world!"); // false
palindrome("No lemon, no melon"); // true