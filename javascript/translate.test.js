// import { describe } from "@jest/globals";

import {translateToMorseCode, translateToEnglish } from "./translate.js";

describe("Testing engToMorse function which translates English Text to Morse", () => {
   const invalidEngErr = new Error("Text should contain english alphabet or space only for english to morse code translation");
   it("should translate a single English character as expected", () => {
    expect(translateToMorseCode("a")).toBe(".-");
    expect(translateToMorseCode("s")).toBe("...");
  });
  it("Should translate english words correctly as expected", () => {
    expect(translateToMorseCode("hello", translateToMorseCode)).toStrictEqual(
      ".... . .-.. .-.. ---",
    );
  });
  it("should translate spaces between words to / correctly", () => {
    expect(translateToMorseCode("a a")).toBe(
      ".- / .-",
    );
    expect(translateToMorseCode("this is a text")).toBe(
      "- .... .. ... / .. ... / .- / - . -..- -",
    );
  });
  it("Should ignore trailing spaces while translating correctly", () => {
    expect(translateToMorseCode("a      ",translateToMorseCode)).toBe(".-");
  });
  it("Should translate words with spaces and uppercase letters correctly", () => {
    expect(translateToMorseCode("Whats Up")).toBe(
      ".-- .... .- - ... / ..- .--.",
    );
  });
  
});
describe("Testing morseToEnglish function that translate Morse code to English text", () => {
  const invalidMorErr = new Error(
    "Error: Please ensure that the code only consists of ., -, / or  space. Please separate each letter by space and words by '/'.",
  );
  it("Should translate individual characters as expected", () => {
    expect(translateToEnglish(".-")).toBe("A");
  });
  it("should translate and remove spaces from English characters correctly", () => {
    expect(translateToEnglish (".... . .-.. .-.. ---")).toBe("HELLO");
    expect(translateToEnglish ("--. --- --- -.. -... -.-- .")).toBe("GOODBYE");
  });
  it("Should translate consecutive and inconsistent spaces correctly and ignore trailing spaces", () => {
    expect(translateToEnglish (".-      .-")).toBe("AA");
    expect(translateToEnglish (".-/ .-")).toBe("A A");
    expect(translateToEnglish ("     .-    ")).toBe("A");
  });
  it("should translate a / to a space between words correctly", () => {
    expect(translateToEnglish ("/")).toBe(" ");
    expect(translateToEnglish (".- / .-")).toBe("A A");
  });
  
});