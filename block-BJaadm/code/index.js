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

// Create an array peopleName and store value of name key from persons array

let peopelName = persons.map((person) => {
      return person.name;
});
console.log(peopelName);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((person) => {
  return person.grade;
});
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((person) => {
  return person.sex;
});
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let nameWithJOrP  = peopelName.filter(name => name.startsWith("J") || name.startsWith("P"));
console.log(nameWithJOrP);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let nameWithAOrC  = peopelName.filter(name => name.startsWith("A") || name.startsWith("C"));
console.log(nameWithAOrC);

// Log all the filtered male ('M') in persons array

let filteredMale  = peopleSex.filter(sex => sex === "M");
console.log(filteredMale);  

// Log all the filtered female ('F') in persons array

let filteredFemale  = peopleSex.filter(sex => sex === "F");
console.log(filteredFemale);  

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let femaleWithCOrJ  = 
persons
.filter(person => person.sex === "F")
.filter(person => person.name.startsWith("C") || person.name.startsWith("J")
);
console.log(femaleWithCOrJ);

// Log all the even numbers from peopleGrade array

console.log(peopleGrade.filter(grade => grade  % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
let personWithJ = persons.find(person => person.name.startsWith("J"));
console.log(personWithJ);

// Find the first name that starts with 'P' in persons array and log the object

let personWithP = persons.find(person => person.name.startsWith("P"));
console.log(personWithP);

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let personWithJGradeAFemale = persons.find(person => {
  return person.name.startsWith("J") && person.sex === "F" && person.grade > 10;
});
console.log(personWithJGradeAFemale);

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter(person => person.sex === "F");
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter(person => person.sex === "M");
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc, val) => {
      acc += val;
      return acc;
}, 0);

console.log(gradeTotal);

// Find the average grade

let averageGrade = gradeTotal / peopleGrade.length
console.log(averageGrade);

// Find the average grade of male

let gradeOfMale = persons
    .filter(person => person.sex === "M")
    .map(people => people.grade);
  let totalGradeOfMale = gradeOfMale.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0)
    let averageGradeOfMale = totalGradeOfMale / gradeOfMale.length;
console.log(averageGradeOfMale);

// Find the average grade of female

let gradeOfFemale = persons
    .filter(person => person.sex === "F")
    .map(people => people.grade);
  let totalGradeOfFemale = gradeOfFemale.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0)
    let averageGradeOfFemale = totalGradeOfFemale / gradeOfFemale.length;
console.log(averageGradeOfFemale);

// Find the highest grade

let highestGrade = [...peopleGrade].sort((a, b) => a - b).pop();

console.log(highestGrade);

// Find the highest grade in male

let highestGradeOfMale = [...gradeOfMale].sort((a, b) => a - b).pop();

console.log(highestGradeOfMale);

// Find the highest grade in female

let highestGradeOfFemale = [...gradeOfFemale].sort((a, b) => a - b).pop();

console.log(highestGradeOfFemale);

// Find the highest grade for people whose name starts with 'J' or 'P'

let startWithJP = persons
  .filter((word) => word.name.startsWith("J") || word.name.startsWith("P"))
  .map((m) => m.grade);
console.log([...startWithJP].sort((a, b) => a - b).pop());


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);

// Sort the peopleGrade in descending order

peopleGrade.sort((a, b) => b - a);
console.log(peopleGrade);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let peopleGradeDecending = [...peopleGrade].sort((a, b) => b - a);
console.log(peopleGradeDecending);

// Sort the array peopelName in ascending `ABCD..Za....z`

let peopleNameSorted = peopelName.sort();
console.log(peopleNameSorted);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

let peopleNameSortedAgain = [...peopelName].sort();
console.log(peopleNameSortedAgain);