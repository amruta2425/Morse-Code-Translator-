import {reverseMorseCodeDict ,translateToMorseCode, translateToEnglish } from "./translate.js";

// Event listener for translate button
const translateBtn = document.getElementById('translate-btn');
translateBtn.addEventListener('click', () => {
  const inputText = document.getElementById('text-input').value;
  const resultTextArea = document.getElementById('translated-text');
  if (inputText.startsWith('.') || inputText.startsWith('-')) {

    // Morse Code to English translation

    if (inputText.match(/[^.\s-]/)) {

      // Alert for invalid characters in Morse code input
      alert("Invalid input! Please enter valid Morse Code without alphabetic characters or special characters.");
    } 
    else {
      const translatedText = translateToEnglish(inputText);
      resultTextArea.value = translatedText;
    }
  } else {
    // English to Morse Code translation
    if (inputText.match(/[0-9@$%^&*()_+={}|[\]\\:;"'<>,.?/#-]/)) {
      // Alert for invalid characters in English input
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





