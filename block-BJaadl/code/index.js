let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array) {
  return [...array].sort((a, b) => b.length - a.length)[0];
}
findLongestWord(words);
console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.

console.log(words.map(word => word.length));

// - Create a new array that only contains word with atleast one vowel.

let wordsWithVowel = words.filter((word) => {
  if (
    word.toLowerCase().includes("a") ||
    word.toLowerCase().includes("e") ||
    word.toLowerCase().includes("i") ||
    word.toLowerCase().includes("o") ||
    word.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(wordsWithVowel);

// - Find the index of the word "rhythm"

console.log(words.findIndex(word => word === "rhythm"));

// - Create a new array that contians words not starting with vowel.

let wordsStartingWithVowel = words.filter((word) => {
  if (
    word.toLowerCase().startsWith("a") ||
    word.toLowerCase().startsWith("e") ||
    word.toLowerCase().startsWith("i") ||
    word.toLowerCase().startsWith("o") ||
    word.toLowerCase().startsWith("u")
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(wordsStartingWithVowel);

// - Create a new array that contianse words not ending with vowel

let wordsEndingWithVowel = words.filter((word) => {
  if (
    word.toLowerCase().endsWith("a") ||
    word.toLowerCase().endsWith("e") ||
    word.toLowerCase().endsWith("i") ||
    word.toLowerCase().endsWith("o") ||
    word.toLowerCase().endsWith("u")
  ) {
    return false;
  } else {
    return true;
  }
});

console.log(wordsEndingWithVowel);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers






// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

// - Create a new array that contains only even numbers

// - Create  a new array that contains only odd numbers.

// - Create a new array that should have true for even number and false for odd numbers.

// - Sort the above number in assending order.

// - Does sort mutate the original array?

// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
