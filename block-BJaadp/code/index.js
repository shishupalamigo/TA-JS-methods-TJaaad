let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

// let totalGrades = persons
//     .map(person => person.grade)
//     .reduce((acc, cv) => {
//       acc += cv;
//       return acc;
//     }, 0) 
let totalGrades = persons.reduce((acc, cv) => {
  return acc + cv.grade; 
}, 0);
let avgGrade = totalGrades / persons.length;

console.log(avgGrade);

// Find the average grade of male
let male =  persons
.filter(person => person.sex === "M");

 let totalGradesOfMale =
    male
      .map(person => person.grade)    
      .reduce((acc, cv) => {
        acc += cv;
        return acc;
      }, 0) 
let avgGradeOfMale = totalGradesOfMale / male.length;
console.log(avgGradeOfMale);

// Find the average grade of female

let female =  persons
.filter(person => person.sex === "F");

 let totalGradesOfFemale =
    female
      .map(person => person.grade)    
      .reduce((acc, cv) => {
        acc += cv;
        return acc;
      }, 0) 
let avgGradeOfFemale = totalGradesOfFemale / female.length;
console.log(avgGradeOfFemale);

// Find the highest grade

let highestGrade = persons
      .map(person => person.grade)
      .reduce((a, b) => a > b ? a: b ,0);
console.log(highestGrade);

// Find the highest grade in male

let highestGradeOfMale = male
      .map(person => person.grade)
      .reduce((a, b) => a > b ? a: b ,0);
console.log(highestGradeOfMale);

// Find the highest grade in female

let highestGradeOfFemale = female
      .map(person => person.grade)
      .reduce((a, b) => a > b ? a: b ,0);
console.log(highestGradeOfFemale);

// Find the highest grade for people whose name starts with 'J' or 'P'

let peopleWithJP = persons.filter(person => {
  return person.name.startsWith("J") || 
  person.name.startsWith("P")
});
let highestGradeOfPeopleWithJP = peopleWithJP
      .map(person => person.grade)
      .reduce((a, b) => a > b ? a: b ,0);
console.log(highestGradeOfPeopleWithJP);


const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

// let fruitsObj = {};
// fruitBasket.forEach(fruit =>  fruitsObj[fruit] ? fruitsObj[fruit] += 1 : fruitsObj[fruit] = 1);

let fruitsObj = fruitBasket.reduce((acc, fruit) =>  {
  acc[fruit] ? acc[fruit] += 1 : acc[fruit] = 1
  return acc;
}, {});
console.log(fruitsObj);

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let newArr = Object.entries(fruitsObj);
console.log(newArr);



const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

// let flatArr = data.flat(Infinity);
// console.log(flatArr);

let flatArr = data.reduce((acc, cv) => {
 acc = acc.concat(cv); 
  return acc;
} ,[])
console.log(flatArr);


const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

let flatArrTwo = dataTwo.reduce((acc, cv) => {
  acc = acc.concat(cv.flat(Infinity)); 
   return acc;
 } ,[])
 console.log(flatArrTwo);

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];
 
function increment(a) {
 return a += 1;
};
function double(a) {
  return a *= 2;
};
function decrement(a) {
  return a -= 1;
 };
 function triple(a) {
  return a *= 3;
};
function half(a) {
   a /= 2;
   return Math.round(a);
};
console.log(half(15));

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

// let incrementValue = pipeline[0](3);
// console.log(incrementValue);

// let doubleValue = pipeline[1](incrementValue);
// console.log(doubleValue);

// let decrementValue = pipeline[2](doubleValue);
// console.log(decrementValue);

let value = pipeline.reduce((acc, cv) => {
  acc = cv(acc);
  return acc;
}, 3)

console.log(value);

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

let finalValue = pipeline2.reduce((acc, fn) => {
  acc = fn(acc);
  console.log(acc);
  return acc;
}, 8); 

console.log(finalValue);