Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   
   - Parameter: separator(optional) 
   - Return: A string with all array elements joined.
   - Example:
   ```js
  var a = ['Wind', 'Water', 'Fire'];
  a.join();      // 'Wind,Water,Fire'
  a.join(', ');  // 'Wind, Water, Fire'
  a.join(' + '); // 'Wind + Water + Fire'

   ```
   `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
  - No it does not mutate the original array.
3. `flat`

   - Parameter: depth (optional)
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
   ```js
    const arr = [1, 2, [3, 4]];
    arr.flat(); // [1, 2, 3, 4]

    const arr = [1, 2, [3, 4, [5, 6]]];
    const flattened = [...flatten(arr, Infinity)];
    // [1, 2, 3, 4, 5, 6]

    var arr3 = [1, 2, [3, 4, [5, 6]]];
    arr3.flat(2);
    // [1, 2, 3, 4, 5, 6]
   ```
   The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - No it does not mutate the original array.

4. `push`

   - Parameter: elementN
   - Return: The new length property of the object upon which the method was called.
   - Example:
   ```js
    let sports = ['soccer', 'baseball']
    let total = sports.push('football', 'swimming')

    console.log(sports)  // ['soccer', 'baseball',    'football', 'swimming']

    var animals = ['pigs', 'goats', 'sheep'];
    animals.push('chickens');

    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep",    "cows", "chickens"]


    console.log(animals.push('cows'));
    // expected output: 4

   ```
   The `push()` method adds one or more elements to t  - he end of an array and returns the new length of t  - he array.
   - It mutates the original array.

5. `indexOf`

   - Parameter: searchElement, fromIndex -Optional
   - Return: The first index of the element in the   array; -1 if not found
   - Example:
   ```js
    var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));
    // expected output: 1

    // start from index 2
    console.log(beasts.indexOf('bison', 2));
    // expected output: 4

    console.log(beasts.indexOf('giraffe'));
    // expected output: -1
   ```
   The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array.

6. `lastIndexOf`

   - Parameter: searchElement, fromIndex Optional
   - Return: The last index of the element in the array; -1 if not found.
   - Example:
   ```js
    var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    console.log(animals.lastIndexOf('Dodo'));
    // expected output: 3

    console.log(animals.lastIndexOf('Tiger'));
    // expected output: 1

   ```
   The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
   - No it does not mutate the original array.

7. `includes`

   - Parameter: valueToFind, fromIndex Optional
   - Return: A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified).
   - Example:
   ```js
  var array1 = [1, 2, 3];

    console.log(array1.includes(2));
    // expected output: true

    var pets = ['cat', 'dog', 'bat'];

    console.log(pets.includes('cat'));
    // expected output: true

    console.log(pets.includes('at'));
    // expected output: false
   ```
   The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
   - No it does not mutate the original array.

8. `reverse`

   - Parameter: none.
   - Return: The reversed array.
   - Example:
   ```js
    var array1 = ['one', 'two', 'three'];
    console.log('array1: ', array1);
    // expected output: Array ['one', 'two', 'three']

    var reversed = array1.reverse(); 
    console.log('reversed: ', reversed);
    // expected output: Array ['three', 'two', 'one']

    /* Careful: reverse is destructive. It also changes
    the original array */ 
    console.log('array1: ', array1);
    // expected output: Array ['three', 'two', 'one']

   ```
   The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
    - Yes it does mutate.

9. `every`

   - Parameter: callback, index(optional), array(optional), thisArg(optiona).
   - Return: true if the callback function returns a truthy value for every array element. Otherwise, false.
   - Example:
   ```js
    function isBelowThreshold(currentValue) {
      return currentValue < 40;
    }

    var array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // expected output: true
   ```
   The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    - No Mutation

10. `shift`

   - Parameter: none.
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
   ```js
  var array1 = [1, 2, 3];

    var firstElement = array1.shift();

    console.log(array1);
    // expected output: Array [2, 3]

    console.log(firstElement);
    // expected output: 1

   ```
   The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.
    - mutatin happens

11. `splice`

   - Parameter: start, deleteCount (optional), item1, item2, ... Optional
   - Return: An array containing the deleted elements.
   - Example:
   ```js
    var months = ['Jan', 'March', 'April', 'June'];
      months.splice(1, 0, 'Feb');
      // inserts at 1st index position
      console.log(months);
      // expected output: Array ['Jan', 'Feb', 'March',       'April', 'June']

      months.splice(4, 1, 'May');
      // replaces 1 element at 4th index
      console.log(months);
      // expected output: Array ['Jan', 'Feb', 'March',       'April', 'May']

   ```
   The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
   - It mutates

12. `find`

   - Parameter: callback - Function to execute on each value in the array, taking 3 arguments:

     - element - The current element in the array.

     - Index(optional) - The index (position) of the current element in the array.

     - Array (optional) - The array that find was called on.

     -  thisArg(optional) - Object to use as this inside callback
   - Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
   - Example:
   ```js
      const array1 = [5, 12, 8, 130, 44];

      const found = array1.find((element) => element > 10);

      console.log(found);
      // expected output: 12

      const inventory = [
        { name: "apples", quantity: 2 },
        { name: "bananas", quantity: 0 },
        { name: "cherries", quantity: 5 },
      ];

      function isCherries(fruit) {
        return fruit.name === "cherries";
      }
      console.log(inventory.find(isCherries));
      // { name: 'cherries', quantity: 5 }
   ```
   - The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
   - It does not mutate the original array.

13. `unshift`

   - Parameter: (elements)- The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
   ```js

      let arr = [4, 5, 6];

      arr.unshift(1, 2, 3);
      console.log(arr);
      // [1, 2, 3, 4, 5, 6]

      arr = [4, 5, 6]; // resetting the array

      arr.unshift(1);
      arr.unshift(2);
      arr.unshift(3);

      console.log(arr);
      // [3, 2, 1, 4, 5, 6]

      let arr = [1, 2];

      arr.unshift(0); // result of the call is 3, which is     the new array length
      // arr is [0, 1, 2]

      arr.unshift(-2, -1); // the new array length is 5
      // arr is [-2, -1, 0, 1, 2]

      arr.unshift([-4, -3]); // the new array length is 6
      // arr is [[-4, -3], -2, -1, 0, 1, 2]

      arr.unshift([-7, -6], [-5]); // the new array length     is 8
      // arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1,      2 ]

   ```
     - The `unshift()` method inserts the given values to the beginning of an array-like object.

    - It mutates the original array.

14. `findIndex`

   - Parameter: (callback)- A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

    - element - The current element being processed in the    array.
    
    - Index(optional) - The index of the current element      being processed in the array.
    
    - Array (optional) - The array findIndex() was called     upon.
    
    - thisArg - (optional) - Optional object to use  as this when executing callback.
   - Return: The index of the first element in the array that passes the test. Otherwise, -1.
   - Example:
   ```js
      function isPrime(num) {
        for (let i = 2; num > i; i++) {
          if (num % i == 0) {
            return false;
          }
        }
        return num > 1;
      }

      console.log([4, 6, 8, 9, 12].findIndex(isPrime)); //     -1, not found
      console.log([4, 6, 7, 9, 12].findIndex(isPrime)); //     2 (array[2] is 7)

   ```
 - The `findIndex()` method executes the callback function once for every index in the array until it finds the one where callback returns a truthy value.
- It does not mutate the original array.


15. `filter`

   - Parameter: callback - Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

   - currentValue - The current element being processed    in the array.

   - index (optional) - The index of the current element   being processed in the array.

   - array (optional) - The array filter was called upon.

   - thisArg (optional) - Value to use as this when  executing callback.
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
   ```js
 
      const words = [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
      ];

      const result = words.filter((word) => word.length >      6);

      console.log(result);
      // expected output: Array ["exuberant",      "destruction", "present"]

   ```
 - The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

- It does not mutate the original array.



16. `flat`

   - Parameter: (depth - optional) The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
   ```js
      const arr1 = [1, 2, [3, 4]];
      arr1.flat();
      // [1, 2, 3, 4]

      const arr2 = [1, 2, [3, 4, [5, 6]]];
      arr2.flat();
      // [1, 2, 3, 4, [5, 6]]

      const arr3 = [1, 2, [3, 4, [5, 6]]];
      arr3.flat(2);
      // [1, 2, 3, 4, 5, 6]

      const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
      arr4.flat(Infinity);
      // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

   ```
   - The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

   - No it does not mutate the original array.

17. `forEach`

   - Parameter: callback Function to execute on each element. It accepts between one and three arguments:

     - currentValue: The current element being processed in the array.

      -index (Optional): The index of currentValue in the array.

    - array (Optional): The array forEach() was called upon.

    - thisArg (Optional): Value to use as this when executing callback.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
   ```js
      const array1 = ["a", "b", "c"];

      array1.forEach((element) => console.log(element));

      // expected output: "a"
      // expected output: "b"
      // expected output: "c"

      let words = ["one", "two", "three", "four"];
      words.forEach(function (word) {
        console.log(word);
        if (word === "two") {
          words.shift(); //'one' will delete from array
        }
      }); // one // two // four

      console.log(words); //['two', 'three', 'four']
   ```
   - The `forEach()` method executes a provided function once for each array element.

   - No it does not mutate the original array.

18. `map`

   - Parameter: callback

        - Function that is called for every element of arr.  Each time callback executes, the returned value is  added to newArray.
   
       - The callback function accepts the following  arguments:
   
      - currentValue:   The current element being processed in the array.
   
      - indexOptional: The index of the current element being processed in   the array.
   
      - arrayOptional: The array map was called upon.
   
      - thisArgOptional: Value to use as this when executing callback.
   - Return: A new array with each element being the result of the callback function.
   - Example:
   ```js
    const array1 = [1, 4, 9, 16];

      // pass a function to map
      const map1 = array1.map((x) => x * 2);

      console.log(map1);
      // expected output: Array [2, 8, 18, 32]
   ```
   - The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

   - No it does not mutate the original array.

19. `pop`

   - Parameter: 
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
   ```js
      const plants = ["broccoli", "cauliflower",     "cabbage", "kale", "tomato"];

      console.log(plants.pop());
      // expected output: "tomato"

      console.log(plants);
      // expected output: Array ["broccoli",       "cauliflower", "cabbage", "kale"]

      plants.pop();

      console.log(plants);
      // expected output: Array ["broccoli",       "cauliflower", "cabbage
   ```
    -  The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

    - It mutates the original array.

20. `reduce`

 - Parameter: 
  
    - callback: A function to execute on each element in the array (except for the first, if no initialValue is supplied).

      -  It takes four arguments:

         - accumulator: The accumulator accumulates callback's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied.

         - currentValue: The current element being processed in the array.

         - index Optional: The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.

         - array Optional: The array reduce() was called upon.

         - initialValue Optional: A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a TypeError.
   - Return: The single value that results from the reduction.
   - Example:
   ```js
      const array1 = [1, 2, 3, 4];
      const reducer = (accumulator, currentValue) =>  accumulator + currentValue;

      // 1 + 2 + 3 + 4
      console.log(array1.reduce(reducer));
      // expected output: 10

      // 5 + 1 + 2 + 3 + 4
      console.log(array1.reduce(reducer, 5));
      // expected output: 15
   ```
   - The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

   - It does not mutate the original array.


   
21. `slice`

   - Parameter: 
      - start Optional: Zero-based index at which to start extraction.
        - A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

        - If start is undefined, slice starts from the index 0.

        - If start is greater than the index range of the sequence, an empty array is returned.

        - Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
   - Return: A new array containing the extracted elements.
   - Example:
   ```js
      const animals = ["ant", "bison", "camel", "duck", "elephant"];

      console.log(animals.slice(2));
      // expected output: Array ["camel", "duck",    "elephant"]

      console.log(animals.slice(2, 4));
      // expected output: Array ["camel", "duck"]

      console.log(animals.slice(1, 5));
      // expected output: Array ["bison", "camel", "duck", "elephant"]

   ```
     - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

    - It does not mutate the original array.

22. `some`

   - Parameter: 
      - callback: A function to test for each element, taking three arguments:

         - element: The current element being processed in the array.

         - index Optional: The index of the current element being processed in the array.

         - arrayOptional: The array some() was called upon.

         - thisArgOptional: A value to use as this when executing callback.
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
   ```js
      const array = [1, 2, 3, 4, 5];

      // checks whether an element is even
      const even = (element) => element % 2 === 0;

      console.log(array.some(even));
      // expected output: true

      const fruits = ["apple", "banana", "mango", "guava"];

      function checkAvailability(arr, val) {
        return arr.some((arrVal) => val === arrVal);
      }

      checkAvailability(fruits, "kela"); // false
      checkAvailability(fruits, "banana"); // true
   ```
   - The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

  - It does not mutate the original array.
