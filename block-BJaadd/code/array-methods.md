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

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

13. `unshift`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

14. `findIndex`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

15. `filter`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

16. `flat`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

17. `forEach`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

18. `map`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``
19. `pop`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

20. `reduce`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``
   
21. `slice`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``

22. `some`

   - Parameter: 
   - Return: 
   - Example:
   ```js

   ```
   ``
