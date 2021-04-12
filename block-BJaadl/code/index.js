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
console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.

console.log(words.map(word => word.length));

// - Create a new array that only contains word with atleast one vowel.

function checkVowel(word){
  return (
    word.toLowerCase().includes("a") ||
    word.toLowerCase().includes("e") ||
    word.toLowerCase().includes("i") ||
    word.toLowerCase().includes("o") ||
    word.toLowerCase().includes("u")
  );
};
let vowelFilter = words.filter((w) => checkVowel(w));
console.log(vowelFilter);

// - Find the index of the word "rhythm"

console.log(words.findIndex(word => word === "rhythm"));

// - Create a new array that contians words not starting with vowel.

let wordsNotStartingWithVowel = words.filter(
  (word) => !checkVowel(word[0])
);

console.log(wordsNotStartingWithVowel);



// - Create a new array that contianse words not ending with vowel

// let wordsEndingWithVowel = words.filter((word) => {
//   if (
//     word.toLowerCase().endsWith("a") ||
//     word.toLowerCase().endsWith("e") ||
//     word.toLowerCase().endsWith("i") ||
//     word.toLowerCase().endsWith("o") ||
//     word.toLowerCase().endsWith("u")
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// });

// console.log(wordsEndingWithVowel);

let wordsNotEndingWithVowel = words.filter(
  (word) => !checkVowel(word[word.length - 1])
);

console.log(wordsNotEndingWithVowel);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(array) {
  return array.reduce((acc, num) => {
      acc += num; 
      return acc;  
}, 0); 
}
console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multiplesOfThree = numbers.filter((number) => number % 3 === 0);
console.log(multiplesOfThree);


// - Create a new array that contains only even numbers

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// - Create  a new array that contains only odd numbers.

let oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

// - Create a new array that should have true for even number and false for odd numbers.

let isOddOrEven = numbers.map((number) => {
  return number % 2 ===  0;
});
console.log(isOddOrEven);

// - Sort the above number in assending order.

let assendingOrder = [...numbers].sort((a, b) => a - b );
console.log(assendingOrder);

// - Does sort mutate the original array?

// Yes the sort method mutates the original Array.

// - Find the sum of the numbers in the array.

function sumArray(array) {
  return array.reduce((acc, num) => {
      acc += num; 
      return acc;  
}, 0); 
}
console.log(sumArray(numbers));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array) {
 let sum = array.reduce ((acc, num) => {
     acc += num; 
     return acc;
  }, 0);
  return sum / array.length
}
console.log(averageNumbers(numbers));





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

function averageWordLength(array) {
  let sum = array.reduce((acc, word) => {
      acc = acc + word.length;
      return acc;
  }, 0);
  return sum / array.length
} 
console.log(averageWordLength(strings));
