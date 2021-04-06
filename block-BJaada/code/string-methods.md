Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

  - Parameter:  none;
  - Return: A new srting containg the same characters  but converted to upper case.
  - Example: 
  ```js
  let campus = "AltCampus";
  campus.toUpperCase(); // "ALTCAMPUS"

  let sentance = 'A quick brown fox jumped over a lazy dog';
  sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
  let houseName = 'Starks';
     houseName.toUpperCase(); // "STARKS"
  ```
- `toUpperCase` method return the value of the string converted to uppercase.  

3. `toLowerCase`

  - Parameter: none.
  - Return: A new string containing same characters as the calling string but converted to lower case.
  - Example: 
  ```js
  let campus = "AltCampus";
  campus.toLowerCase(); // "altcampus"

  let sentance = 'A quick brown fox jumped over a lazy dog';
  sentance.toLowerCase(); // "a quick brown fox jumped over a lazy dog"
  let houseName = 'Starks';
     houseName.toLowerCase(); // "starks" 

  ```
  `toLowerCase` method return the string converted to lowecase.
 
4. `trim`

  - Parameter: none.
  - Return: A new string with no whitespace at both ends.
  - Example: 
  ```js
  let campus = "  AltCampus  ";
  campus.trim(); // "AltCampus"

  let sentance = '    A quick brown fox jumped over a lazy dog    ';
  sentance.trim(); // "A quick brown fox jumped over a lazy dog"
  let houseName = '  Hello World!   ';
     houseName.trim(); // "Hello World!"
  ```
  `trim` removes the whitespaces from the both ends of the string. 

5. `trimEnd`

  - Parameter: none. 
  - Return: A new sting without the whitespaces at the end.
  - Example: 
  ```js
  let campus = "  AltCampus  ";
  campus.trimEnd(); // "  AltCampus"

  let sentance = '    A quick brown fox jumped over a lazy dog    ';
  sentance.trimEnd(); // "    A quick brown fox jumped over a lazy dog"

  let houseName = '  Hello World!   ';
     houseName.trimEnd(); // "  Hello World!"
  ```
  `trimEnd` method removes the whitespace from the the End of the string and returns the string. 

6. `trimStart` 

  - Parameter: none.
  - Return: A new string representing the calling string stripped of whitespace from its beginning
  - Example: 
  ```js
  let campus = "  AltCampus  ";
  campus.trimStart(); // "AltCampus  "

  let sentance = '    A quick brown fox jumped over a lazy dog    ';
  sentance.trimStart(); // "A quick brown fox jumped over a lazy dog    "

  let houseName = '  Hello World!   ';
     houseName.trimStart(); // "Hello World!  "

  ```
  `trimStart` method removes the Whitespaces from the begining of the string.

7. `concat` 

  - Parameter: strings to concatenate.
  - Return: A new string containing the combined text of the strings provided.
  - Example: 
  ```js
  let hello = 'Hello, '
  console.log(hello.concat('Kevin', '. Have a nice day.'))
 // Hello, Kevin. Have a nice day.
  let greetList = ['Hello', ' ', 'Venkat', '!']
  "".concat(...greetList)  // "Hello Venkat!"
  ```
  The `concat()` method concatenates the string arguments to the calling string and returns a new string.



8. `endsWith`

  - Parameter: searchString
     The characters to be searched for at the end of str.
     length - optional - If provided, it is used as the length of str
  - Return: true if the given characters are found at the end of the string; otherwise, false.
  - Example: 
  ```js
    let str = 'To be, or not to be, that is the question.'

    console.log(str.endsWith('question.'))  // true
    console.log(str.endsWith('to be'))      // false
    console.log(str.endsWith('to be', 19)) // true
  ```

The `endsWith()` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

9. `includes` 

  - Parameter: - searchString
      A string to be searched for within str.
             - position - Optional
    The position within the string at which to begin     searching for searchString. (Defaults to 0.) 

  - Return: true if the search string is found anywhere within the given string; otherwise, false if not.
  - Example: 
  ```js
  const str = 'To be, or not to be, that is the question.'

  console.log(str.includes('To be'))        // true
  console.log(str.includes('question'))     // true
  console.log(str.includes('nonexistent'))  // false
  ```
The `includes()` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

10. `indexOf` 

  - Parameter: searchValue - The string value to  search for.
    fromIndex - Optional - An integer representing the index at which to start the search. Defaults to 0.
  - Return: The index of the first occurrence of searchValue, or -1 if not found.


  - Example: 
  ```js
    'hello world'.indexOf('') // returns 0
    'hello world'.indexOf('', 0) // returns 0
    'hello world'.indexOf('', 3) // returns 3

  ```
  The `indexOf()` method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

11. `lastIndexOf`

  - Parameter: SearchValue and fromIndex - optional.
  - Return: The index of the last occurrence of searchValue; -1 if not found.
  - Example: 
  ```js
    'canal'.lastIndexOf('a');     // returns 3
    'canal'.lastIndexOf('a', 2);  // returns 1
    'canal'.lastIndexOf('a', 0);  // returns -1
  ```
  The `lastIndexOf()` method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

12. `padEnd` 

  - Parameter: targetLength,   padString - optional.
  - Return: A String of the specified targetLength with the padString applied at the end of the current str.
  - Example: 
  ```js
    'abc'.padEnd(10);          // "abc       "
    'abc'.padEnd(10, "foo");   // "abcfoofoof"
    'abc'.padEnd(6, "123456"); // "abc123"

  ```
The `padEnd()` method pads the current string with a given string so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`

  - Parameter: targetLength,   padString - optional
  - Return: A String of the specified targetLength with padString applied from the start.
  - Example: 
  ```js
  'abc'.padStart(10);         // "       abc"
  'abc'.padStart(10, "foo");  // "foofoofabc"
  'abc'.padStart(6,"123465"); // "123abc"

  ```
The `padStart()` method pads the current string with another string  until the resulting string reaches the given length. The padding is applied from the start of the current string.

14. `repeat`

  - Parameter: count
  - Return: A new string containing the specified number of copies of the given string.
  - Example: 
  ```js
  'abc'.repeat(2)     // 'abcabc'
  'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
  'abc'.repeat(1/0)   // RangeError

  ```
The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`

  - Parameter: regexp (pattern), substr, newSubstr(replacement), function(replacement)
  - Return: A new string, with some or all matches of a pattern replaced by a replacement.
  - Example: 
  ```js
  let str = 'Twas the night before Xmas...';
  let newstr = str.replace(/xmas/i, 'Christmas');
  console.log(newstr);  // Twas the night before Christmas...
  
  ```
The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.

16. `slice` 

  - Parameter: beginIndex, endIndex - optional
  - Return: A new string containing the extracted section of the string.
  - Example: 
  ```js
    let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
    console.log(str2)  // OUTPUT: he morn
    console.log(str3)  // OUTPUT: morning is upon u
    console.log(str4)  // OUTPUT: is upon us.
    console.log(str5)  // OUTPUT: ""

  ```
  The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`

  - Parameter: separator -optional,  limit - optional
  - Return: An Array of strings, split at each point where the separator occurs in the given string.
  - Example: 
  ```js
    const myString = ''
    const splits = myString.split()

    console.log(splits);

  ```
The `split()` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 

18. `substring`

  - Parameter: indexStart, indexEnd - optional
  - Return: A new string containing the specified part of the given string.
  - Example: 
  ```js
    let anyString = 'Mozilla'

    // Displays 'M'
    console.log(anyString.substring(0, 1))
    console.log(anyString.substring(1, 0))

    // Displays 'Mozill'
    console.log(anyString.substring(0, 6))

    // Displays 'lla'
    console.log(anyString.substring(4))
    console.log(anyString.substring(4, 7))
    console.log(anyString.substring(7, 4))
    
    // Displays 'Mozilla'
    console.log(anyString.substring(0, 7))
    console.log(anyString.substring(0, 10))

  ```
The `substring()` method returns the part of the string between the start and end indexes, or to the end of the string.