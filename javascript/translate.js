import {morseCodeDict } from "./dictionary.js"

// Reverse Morse Code Dictionary
export const reverseMorseCodeDict = {};
Object.keys(morseCodeDict).forEach((char) => {
  const morseCode = morseCodeDict[char];
  reverseMorseCodeDict[morseCode] = char;
});

// Translate English text to Morse Code
export const translateToMorseCode = (text) => {
    // if (inputText.match(/[0-9@$%^&*()_+={}|[\]\\:;"'<>,.?/-]/)) {

    //     // Alert for invalid characters
    //     throw new Error("Invalid input! Please enter valid English text without special characters or numbers.");
    // }
  const words = text.trim().toUpperCase().split(' ');
  const morseCodeArray = words.map(word => {
    const characters = word.split('');
    const morseCodeChars = characters.map(char => morseCodeDict[char] || '').join(' ');
    return morseCodeChars;
  });
  return morseCodeArray.join(' / ');
};

// Translate Morse Code to English text
export const translateToEnglish = (text) => {
  const morseCodeWords = text.trim().split('/');
  const englishArray = morseCodeWords.map(word => {
    const morseCodeChars = word.trim().split(' ');
    const characters = morseCodeChars.map(code => reverseMorseCodeDict[code] || '').join('');
    return characters;
  });
  return englishArray.join(' ');
};