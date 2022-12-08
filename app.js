function splitInfo(title) {
  console.log('');
  console.log(
    `===========================${
      title ? ` ${title.toUpperCase()} ` : ''
    }================================`,
  );
  console.log('');
}

//? Array.map()
/*
Returns a new array with the results of calling a provided function on every
element in this array.
*/
splitInfo('Array Map');

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

splitInfo('Array Includes');

//? Array.reverse()
/**
 * Reverses the order of the elements in an array.
 */

const listIconsReverse = ['😀', '😫', '😀', '😫', '🤪'];
listIconsReverse.reverse(); // [🤪, 😫, 😀, 😫, 😀]
console.log('listIconsReverse: ', listIconsReverse); // [🤪, 😫, 😀, 😫, 😀]

// Code
const listNumbersReverse = [1, 2, 3, 4, 5];
listNumbersReverse.reverse(); // [5, 4, 3, 2, 1]
console.log('listNumbersReverse: ', listNumbersReverse); // [5, 4, 3, 2, 1]