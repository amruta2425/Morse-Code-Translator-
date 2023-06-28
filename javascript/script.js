import {reverseMorseCodeDict ,translateToMorseCode, translateToEnglish } from "./translate.js";

//Translate button click event

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
    if (inputText.match(/[0-9@$%^&*()_+={}|[\]\\:;"'<>,.?/-]/)) {

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





