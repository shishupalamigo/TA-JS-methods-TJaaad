// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  // your code goes here
  let numberOfPeople = got.houses.reduce((acc, cv) => {
     acc = acc + cv.people.length;
    return acc;
  }, 0);
  return numberOfPeople;
}

function peopleByHouses() {
  // your code goes here
  let peopleInHouse = got.houses.reduce((acc, cv) => {
    acc[cv.name] = cv.people.length;
    return acc;
  }, {});
  return peopleInHouse;
}

function everyone() {
  // your code goes here
  let everyone = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people.map(element => element.name));
    return acc;
  }, []);
  return everyone;
}

function nameWithS() {
  // your code goes here
  let nameWithS = got.houses.reduce((acc, cv) => {
    cv.people.filter(element => {
     if (element.name.toLowerCase().includes("s")) {
      return acc.push(element.name);
     }
    });
    return acc;
  }, []);
  return nameWithS;

}

function nameWithA() {
  // your code goes here
  let nameWithA = got.houses.reduce((acc, cv) => {
    cv.people.filter(element => {
     if (element.name.toLowerCase().includes("a")) {
      return acc.push(element.name);
     }
    });
    return acc;
  }, []);
  return nameWithA;
}

function surnameWithS() {
  // your code goes here
let surnameWithS = got.houses.reduce((acc, cv) => {
  cv.people.filter(element => {
    let surnames = element.name.split(" ");
    if (surnames[1].toLowerCase().includes("s")) {
      return acc.push(element.name);
    }
  });
  return acc;
}, []);
return surnameWithS;
}

function surnameWithA() {
  // your code goes here
  let surnameWithA = got.houses.reduce((acc, cv) => {
    cv.people.filter(element => {
      let surnames = element.name.split(" ");
      if (surnames[1].toLowerCase().includes("a")) {
        return acc.push(element.name);
      }
    });
    return acc;
  }, []);
  return surnameWithA;
}

function peopleNameOfAllHouses() {
  // your code goes here
  let peopleNameOfAllHouses = got.houses.reduce((acc, cv) => {
    acc[cv.name] = cv.people.reduce((a, b) => {
      a.push(b.name);
      return a;
    }, []);
    return acc;
  }, {});
  return peopleNameOfAllHouses;
  
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
