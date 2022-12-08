function splitInfo(title) {
  console.log('');
  console.log(
    `=================${
      title ? ` ${title.toUpperCase()} ` : ''
    }=================`,
  );
  console.log('');
}

// Array basics
// codepen.io/swolpe/pen/KKvQOLV

//? Array.map()
/*
Returns a new array with the results of calling a provided function on every
element in this array.
*/
https: splitInfo('Array Map');

console.log('Array.map');
const listMap = ['😫', '😫', '😫', '😫'];
listMap.map((iconDaLista) => '😀'); // ['😀', '😀', '😀', '😀']
console.log('listMap', listMap);

//! Code
console.log('Array.map Code');
const listaNumeros = [1, 2, 3, 4];
resultadoMap = listaNumeros.map((numero) => numero * 2); // [2, 4, 6, 8]
console.log('resultadoMap: ', resultadoMap);

splitInfo('END Array Map');

//? Array.filter()
/*
 Returns a new array with all elements that pass the test implemented by
 the provided function.
 */
splitInfo('Array Filter');
const listFilterIcon = ['😀', '😫', '😀', '😫'];
listFilterIcon.filter((icon) => icon === '😀'); // ['😀', '😀']
console.log('listFilterIcon', listFilterIcon);

// Code
const listFilterNumbers = [1, 2, 3, 4];
listFilterNumbers.filter((number) => number < 2); // [3, 4]
splitInfo('END Array Filter');

//? Array.reduce()
/*
  Reduce the array to a single value. The value returned by the
  function is stored in an accumulator (result/total).
  const listForReduce = ['😀', '😫', '😀', '😫', 🤪];
  listForReduce.reduce((⬜️, ⚪️) => ⬜️ + ⚪️); // '😀' + '😫' + 😀 + '😫' + 🤪
*/

// OR
splitInfo('Array Reduce');
const listReduce = [1, 2, 3, 4, 5];
const resultReduce = listReduce.reduce((total, item) => total + item, 0); // 15
console.log(resultReduce);
splitInfo('End Array Reduce');

//? Array.find();
/*
Returns the value of the first element in the array that satisfies the provided
testing function. Otherwise undefined is returned.

const list = ['😀', '😫', '😀', '😫', '🤪'];
list.find((⚪️) => ⚪️ === '😀'); // 😀
list.find((⚪️) => ⚪️ === '😝); // undefined
*/

// Code
splitInfo('Array Find');

const listNumberFind = [1, 2, 3, 4, 5];
const result1 = listNumberFind.find((number) => number === 3); // 3
const result2 = listNumberFind.find((number) => number === 6); // undefined
console.log('result1', result1);
console.log('result2', result2);

splitInfo('End Array Find');

//? Array.includes()
/*
 Returns true if the given element is present in the array.
 const list = [😀, 😫, 😀, 😫, 🤪];
 list.includes(😀); // true
 */

// Code
splitInfo('Array Includes');

const listNumberInclude = [1, 2, 3, 4, 5];
listNumberInclude.includes(3); // true
listNumberInclude.includes(6); // false

console.log('listNumberInclude', listNumberInclude.includes(3));

splitInfo('End Array Includes');

//? Array.reverse()
/**
 * Reverses the order of the elements in an array.
 */
splitInfo('Array Reverse');
const listIconsReverse = ['😀', '😫', '😀', '😫', '🤪'];
listIconsReverse.reverse(); // [🤪, 😫, 😀, 😫, 😀]
console.log('listIconsReverse: ', listIconsReverse); // [🤪, 😫, 😀, 😫, 😀]

// Code
const listNumbersReverse = [1, 2, 3, 4, 5];
listNumbersReverse.reverse(); // [5, 4, 3, 2, 1]
console.log('listNumbersReverse: ', listNumbersReverse); // [5, 4, 3, 2, 1]

splitInfo('End Array Reverse');

//? Array.sort()
/*
Sorts the elements of an array in place and returns the array. The default sort order
 is according to string Unicode code points.
*/
splitInfo('Array Sort');
const listIconsSort = ['😀', '😫', '😀', '😫', '🤪'];
listIconsSort.sort(); // [😀, 😀, 😫, 😫, 🤪]
console.log('ICON SORT RESULT', listIconsSort.sort());

// This make more sense 🤔
const listLettersSort = ['D', 'B', 'A', 'C'];
listLettersSort.sort(); // 😀 ['A', 'B', 'C', 'D']
console.log('LETTER SORT RESULT', listLettersSort.sort());

// OR
const listNumberSort = [4, 1, 3, 2, 10];
listNumberSort.sort(); // 😧 [1, 10, 2, 3, 4]
listNumberSort.sort((a, b) => a - b); // 😀 [1, 2, 3, 4, 10]

console.log('SORT 1', listNumberSort.sort());
console.log(
  'SORT 2',
  listNumberSort.sort((a, b) => a - b),
);
splitInfo('End Array Sort');

const arrayTempo = [[{ teste: 22, teste3: 33 }]];
