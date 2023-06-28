// Morse Code Dictionary
const morseCodeDict = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
  ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
  ' ': '/'
};
// Reverse Morse Code Dictionary
const reverseMorseCodeDict = {};
Object.keys(morseCodeDict).forEach((char) => {
  const morseCode = morseCodeDict[char];
  reverseMorseCodeDict[morseCode] = char;
});
// Translate English text to Morse Code
const translateToMorseCode = (text) => {
  const words = text.trim().toUpperCase().split(' ');
  const morseCodeArray = words.map(word => {
    const characters = word.split('');
    const morseCodeChars = characters.map(char => morseCodeDict[char] || '').join(' ');
    return morseCodeChars;
  });
  return morseCodeArray.join(' / ');
};
// Translate Morse Code to English text
const translateToEnglish = (text) => {
  const morseCodeWords = text.trim().split('/');
  const englishArray = morseCodeWords.map(word => {
    const morseCodeChars = word.trim().split(' ');
    const characters = morseCodeChars.map(code => reverseMorseCodeDict[code] || '').join('');
    return characters;
  });
  return englishArray.join(' ');
};
// Translate button click event
const translateBtn = document.getElementById('translate-btn');
translateBtn.addEventListener('click', () => {
  const inputText = document.getElementById('text-input').value;
  const resultTextArea = document.getElementById('translated-text');
  if (inputText.startsWith('.') || inputText.startsWith('-')) {
    // Morse Code to English translation
    const translatedText = translateToEnglish(inputText);
    resultTextArea.value = translatedText;
  } else {
    // English to Morse Code translation
    if (inputText.match(/[0-9@$%^&*()_+={}|[\]\\:;"'<>,.?/]/)) {
      // Alert for invalid characters
      alert("Invalid input! Please enter valid English text without special characters or numbers.");
    } else {
      const translatedText = translateToMorseCode(inputText);
      resultTextArea.value = translatedText;
    }
  }
});
// Clear button click event
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  document.getElementById('text-input').value = '';
  document.getElementById('translated-text').value = '';
});