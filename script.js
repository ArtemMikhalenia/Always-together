
// function getCommonCharacterCount(s1, s2) {
//     let count = 0;
//     s1 = s1.split('');
//     s2 = s2.split('');

//     s1.forEach(element => {
//         if (s2.includes(element)) {
//             count++;
//             s2.splice(s2.indexOf(element), 1);
//         }
//     });

//     return console.log(count);
// }
// getCommonCharacterCount('aabcc', 'adcaa'), 3
// getCommonCharacterCount('zzzz', 'zzzzzzz'), 4
// getCommonCharacterCount('abca', 'xyzbac'), 3
// getCommonCharacterCount('', 'abc'), 0
// getCommonCharacterCount('a', 'b'), 0

// function countCats(matrix) {
//     let count = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if(matrix[i][j] === '^^') {
//                 count++;
//             }
//         }
//     }
//     return console.log(count);
// }

// countCats([
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
// ]);

// function deleteDigit(n) {
//     const arrayNumbers = n.toString().split('').map(Number);
//     let maxNumber = 0;

//     for (let i = 0; i < arrayNumbers.length; i++) {
//         const copyArray = Array.from(arrayNumbers);
//         copyArray.splice(i, 1);

//         const number = parseInt(copyArray.join(''));
//         if (number > maxNumber) {
//             maxNumber = number;
//         }
//     }

//     return console.log(maxNumber);
// }

// deleteDigit(152), 52
// deleteDigit(1001), 101
// deleteDigit(10), 1
// deleteDigit(222219), 22229
// deleteDigit(109), 19
// deleteDigit(342), 42


// function getDNSStats(domains) {
//     const resultObject = {};

//     for (let i = 0; i < domains.length; i++) {
//         const domainParts = domains[i].split('.');
//         let dnsPart = '';

//         // Обратный цикл, чтобы строить DNS-путь снизу вверх
//         for (let j = domainParts.length - 1; j >= 0; j--) {
//             dnsPart += `.${domainParts[j]}`;

//             // Проверка, существует ли уже путь в объекте result
//             if (resultObject[dnsPart]) {
//                 resultObject[dnsPart]++;
//             } else {
//                 resultObject[dnsPart] = 1;
//             }
//         }
//     }

//     return console.log(resultObject);
// }

// getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 }
// getDNSStats(['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }
// getDNSStats([]), {}

// getDNSStats(domains = [
//     'code.yandex.ru',
//     'music.yandex.ru',
//     'yandex.ru'
// ]);
// {
//   '.ru': 3,
//   '.ru.yandex': 3,
//   '.ru.yandex.code': 1,
//   '.ru.yandex.music': 1,
// }      


// function createDreamTeam(members) {
//     if (!Array.isArray(members)) {
//         return false; // Если передан не массив, возвращаем false
//     }
//     const membersTakeOnlyString = members.filter(function (element) {
//         return typeof element === 'string';
//     });

//     const takeFirstLetters = membersTakeOnlyString.map(function (element) {
//         return element.trim()[0].toUpperCase();
//     });
//     const sortFirstLetters = takeFirstLetters.sort();
//     return sortFirstLetters.join('');
// }

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])); // 'ADMM'
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])); // 'LOO'
// console.log(createDreamTeam([
//     'Amelia', null, undefined, 'Ruby', 'Lily', 11, 'Grace', 22, 'Millie',
//     'Daisy', true, 'Freya', false, 'Erin', new Set([1, 2, 3, 4, 5]),
//     'Megan', {'John': 'Smith'}, 'Jasmine', 1, 2, 3, 4, 5, 'Brooke',]))


// function encodeLine(str) {
//     let count = 1;
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//           count += 1;
//       } else {
//           if (count > 1) {
//               result += count.toString() + str[i];
//           } else {
//               result += str[i];
//           }
//           count = 1;
//       }
//   }
//   return console.log(result);
// }

// encodeLine('aaaatttt'), '4a4t'
// encodeLine('aabbccc'), '2a2b3c'
// encodeLine('abbcca'), 'a2b2ca'
// encodeLine('xyz'), 'xyz'
// encodeLine(''), '';


// function repeater(str, options) {
//     let result = '';
//     let addition = options.addition !== undefined ? String(options.addition) : '';
//     let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
//     let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
//     let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;

//     for (let i = 0; i < repeatTimes; i++) {
//         result += str + addition;
//         for (let j = 1; j < additionRepeatTimes; j++) {
//             result += additionSeparator + addition;
//         }
//         if (i !== repeatTimes - 1) {
//             result += options.separator !== undefined ? options.separator : '+';
//         }
//     }

//     return console.log(result);
// }

// repeater('la', { repeatTimes: 3 }), 'la+la+la'
// repeater('single', { repeatTimes: 1 }), 'single'
// repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345'

// repeater('la', { repeatTimes: 3, separator: 's' }), 'laslasla'
// repeater('point', { repeatTimes: 3, separator: '&&&' }), 'point&&&point&&&point'
// repeater('12345', { repeatTimes: 5, separator: '3 words separator' }), '123453 words separator123453 words separator123453 words separator123453 words separator12345'

// repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }), 'la+sla+sla+'
// repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }), 'LALA++sLALA++sLALA++'
// repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }), 'TESTstrADD!'


// function renameFiles(names) {
//     let result = [];
//     let count = {};

//     for (let i = 0; i < names.length; i++) {
//         if (!result.includes(names[i])) {
//             result.push(names[i]);
//             count[names[i]] = 0;
//             console.log(count)
//         } else {
//             count[names[i]]++;
//             let newName = names[i] + `(${count[names[i]]})`;

//             while (result.includes(newName)) {
//                 count[names[i]]++;
//                 newName = names[i] + `(${count[names[i]]})`;
//             }
//             result.push(newName);
//         }
//     }
//     return console.log(result)
// }

// function renameFiles(names) {
//     let result = [];
//     let count = {};

//     for (let i = 0; i < names.length; i++) {
//       if (!result.includes(names[i])) {
//         result.push(names[i]);
//         count[names[i]] = 0;
//       } else {
//         count[names[i]]++;
//         result.push(names[i] + `(${count[names[i]]})`);
//         count[names[i] + `(${count[names[i]]})`] = 0;
//         console.log(count)
//       }
//     }
//     return console.log(result);
// }

// renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
// renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']), ['a', 'b', 'cd', 'b ', 'a(3)']
// renameFiles([]), []

// function getEmailDomain(email) {
//     let domain = email.split('@');
//     console.log(domain)
//     return console.log(domain[domain.length - 1]);
// }

// getEmailDomain('prettyandsimple@example.com'), 'example.com'
// getEmailDomain('someaddress@yandex.ru'), 'yandex.ru'
// getEmailDomain('very.unusual.@.unusual.com@usual.com'), 'usual.com'
// getEmailDomain('admin@mailserver2.ru'), 'mailserver2.ru'
// getEmailDomain('example-indeed@strange-example.com'), 'strange-example.com'

// function calculateHanoi(disksNumber, turnsSpeed) {
//     let turns = Math.pow(2, disksNumber) - 1;
//     let seconds = Math.floor(turns / (turnsSpeed / 3600));
//     return console.log({ turns, seconds });
// }

// calculateHanoi(5, 4074), { turns: 31, seconds: 27 }


// function isMAC48Address(inputString) {
//     let reGroups = inputString.split('-');

//     if (reGroups.length !== 6) {
//         return console.log(false);
//     }

//     const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];

//     for (let i = 0; i < reGroups.length; i++) {
//         let oneGroup = reGroups[i];
//         if (oneGroup.length !== 2) {
//             return console.log(false);
//         }
//         for (let j = 0; j < oneGroup.length; j++) {
//             let char = oneGroup.charAt(j);

//             if (numbers.indexOf(char) === -1 && letters.indexOf(char) === -1) {
//                 return console.log(false);
//             }
//         }
//     }
//     return console.log(true);
// }

// isMAC48Address('00-1B-63-84-45-E6'), true
// isMAC48Address('Z1-1B-63-84-45-E6'), false
// isMAC48Address('not a MAC-48 address'), false
// isMAC48Address('FF-FF-FF-FF-FF-FF'), true
// isMAC48Address('G0-00-00-00-00-00'), false


// function getMatrixElementsSum(matrix) {
//     let sum = 0;
//     let columnCount = matrix[0].length;

//     for (let i = 0; i < columnCount; i++) {
//         for (let j = 0; j < matrix.length; j++) {
//             if (matrix[j][i] <= 0) {
//                 break;
//             }
//             else {
//                 sum += matrix[j][i];
//             }
//         }
//     }
//     return console.log(sum)
// }

// getMatrixElementsSum([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
// ]), 9


// function minesweeper(matrix) {
//     const matrixRows = matrix.length;
//     const matrixColumns = matrix[0].length;
//     const result = [];

//     for (let i = 0; i < matrixRows; i++) {
//         const row = [];
//         for (let j = 0; j < matrixColumns; j++) {
//             let count = 0;
//             // Check all neighbors
//             for (let x = -1; x <= 1; x++) {
//                 for (let y = -1; y <= 1; y++) {
//                     if (x !== 0 || y !== 0) { // Exclude self
//                         const newRow = i + x;
//                         const newCol = j + y;
//                         if (
//                             newRow >= 0 && newRow < matrixRows &&
//                             newCol >= 0 && newCol < matrixColumns &&
//                             matrix[newRow][newCol] === true
//                         ) {
//                             count++;
//                         }
//                     }
//                 }
//             }
//             row.push(count);
//         }
//         result.push(row);
//     }
//     return console.log(result);
// }

// function minesweeper(matrix) {
//     const matrixRows = matrix.length;
//     const matrixColumns = matrix[0].length;
//     const result = [];

//     for (let i = 0; i < matrixRows; i++) {
//         const matrixNumbers = [];
//         for (let j = 0; j < matrixColumns; j++) {
//             let count = 0;

//             // Проверяем каждого соседа по отдельности
//             // Верхний сосед
//             if (i > 0 && matrix[i - 1][j]) {
//                 count++;
//             }
//             // Нижний сосед
//             if (i < matrixRows - 1 && matrix[i + 1][j]) {
//                 count++;
//             }
//             // Левый сосед
//             if (j > 0 && matrix[i][j - 1]) {
//                 count++;
//             }
//             // Правый сосед
//             if (j < matrixColumns - 1 && matrix[i][j + 1]) {
//                 count++;
//             }
//             // Верхний-левый сосед
//             if (i > 0 && j > 0 && matrix[i - 1][j - 1]) {
//                 count++;
//             }
//             // Верхний-правый сосед
//             if (i > 0 && j < matrixColumns - 1 && matrix[i - 1][j + 1]) {
//                 count++;
//             }
//             // Нижний-левый сосед
//             if (i < matrixRows - 1 && j > 0 && matrix[i + 1][j - 1]) {
//                 count++;
//             }
//             // Нижний-правый сосед
//             if (i < matrixRows - 1 && j < matrixColumns - 1 && matrix[i + 1][j + 1]) {
//                 count++;
//             }
//             matrixNumbers.push(count);
//         }
//         result.push(matrixNumbers);
//     }
//     return console.log(result);
// }

// minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
// ]),
//     [
//         [1, 2, 1],
//         [2, 1, 1],
//         [1, 1, 1],
//     ]


// class DepthCalculator {
//     calculateDepth(arr) {
//         let currentDepth = 1; // инициализируем переменную currentDepth для хранения текущей глубины
//         let maxDepth = currentDepth; // инициализируем переменную maxDepth для хранения максимальной глубины

//         for (let i = 0; i < arr.length; i++) { // проходим по элементам массива arr
//             currentDepth = this.calculateDepth(arr[i]) + 1; // рекурсивно вызываем функцию calculateDepth для текущего элемента и увеличиваем глубину на 1
//             if (currentDepth > maxDepth) { // если текущая глубина больше максимальной глубины, обновляем значение максимальной глубины
//                 maxDepth = currentDepth;
//             }
//         }
//         return console.log(maxDepth); // возвращаем максимальную глубину
//     }
// }

// calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 31
// calculateDepth([1, 2, 3, 4, 5, [1]]), 2
// calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 5
// calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3
// calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2
// calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 25
// calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4
// calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 15



// const chainMaker = {
//     chain: [],

//     getLength() {
//         return this.chain.length;
//     },
//     addLink(value) {
//         if (value === undefined) {
//             value = '';
//         }
//         this.chain.push((${ value }));
//         return this;
//     },
//     removeLink(position) {
//         if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
//             this.chain = [];
//             throw new Error("You can't remove incorrect link!");
//         }
//         this.chain.splice(position - 1, 1);
//         return this;
//     },
//     reverseChain() {
//         this.chain.reverse();
//         return this;
//     },
//     finishChain() {
//         const result = this.chain.join('~~');
//         this.chain = [];
//         return result;
//     }
// }



// function sortByHeight(arr) {
//     const arrayForSort = [];
//     // Проходим по входному массиву
//     for (let i = 0; i < arr.length; i++) {
//         // Проверяем, что текущий элемент не равен -1
//         if (arr[i] !== -1) {
//             // Добавляем текущий элемент в отсортированный массив
//             arrayForSort.push(arr[i]);
//         }
//     }

//     arrayForSort.sort();
//     // Создаем переменную для отслеживания индекса отсортированного массива
//     let index = 0;
//     // Повторно проходим по входному массиву
//     for (let i = 0; i < arr.length; i++) {
//         // Проверяем, что текущий элемент не равен -1
//         if (arr[i] !== -1) {
//             // Заменяем текущий элемент на соответствующий элемент из отсортированного массива,
//             // используя переменную index для отслеживания индекса
//             arr[i] = arrayForSort[index];
//             index++;
//         }
//     }
//     return console.log(arr);
// }

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]), [-1, 150, 160, 170, -1, -1, 180, 190]
// sortByHeight([-1, -1, -1, -1, -1]), [-1, -1, -1, -1, -1],
// sortByHeight([-1]), [-1],
// sortByHeight([4, 2, 9, 11, 2, 16]), [2, 2, 4, 9, 11, 16],
// sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]), [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]


// function getSumOfDigits(n) {
//     let getArray = n.toString().split('')
//     let sum = 0;
//     for (let i = 0; i < getArray.length; i++) {
//       sum += Number(getArray[i]);
//       if (sum >= 10) {
//         let resultArray = sum.toString().split('');
//         sum = 0;
//         for (let j = 0; j < resultArray.length; j++) {
//           sum += Number(resultArray[j]);
//         }
//       }
//     }
//     return sum;
//   }

// getSumOfDigits(91), 1
// getSumOfDigits(100), 1
// getSumOfDigits(35), 8
// getSumOfDigits(99), 9
// getSumOfDigits(123), 6


// function transform(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("'arr' parameter must be an instance of the Array!");
//     }

//     const transformedArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '--discard-next') {
//             i++;
//         } else if (arr[i] === '--discard-prev') {
//             if (transformedArr.length > 0 && arr[i - 2] !== '--discard-next') {
//                 transformedArr.pop();
//             }
//         } else if (arr[i] === '--double-next') {
//             if (i + 1 < arr.length) {
//                 transformedArr.push(arr[i + 1]);
//             }
//         } else if (arr[i] === '--double-prev') {
//             if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
//                 transformedArr.push(arr[i - 1]);
//             }
//         } else {
//             transformedArr.push(arr[i]);
//         }
//     }
//     return transformedArr;
// }
// const cases = [
//     ['--discard-prev', 1, 2, 3],
//     ['--double-prev', 1, 2, 3],
//     [1, 2, 3, '--double-next'],
//     [1, 2, 3, '--discard-next']
// ];



// class VigenereCipheringMachine {
//     constructor(reverse = true) {
//       this.reverse = reverse;
//       this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
//                        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
//                        "U", "V", "W", "X", "Y", "Z"];
//     }
  
//     encrypt(message, key) {
//       if (!message || !key) {
//         throw new Error("Incorrect arguments!");
//       }
  
//       message = message.toUpperCase();
//       key = key.toUpperCase();
  
//       let encryptedMessage = "";
//       let keyIndex = 0;
  
//       for (let i = 0; i < message.length; i++) {
//         const currentLetter = message[i];
//         if (this.isLetter(currentLetter)) {
//           const messageCharCode = this.getCharCode(currentLetter);
//           const keyCharCode = this.getCharCode(key[keyIndex]);
//           const encryptedCharCode = (messageCharCode + keyCharCode) % 26;
//           const encryptedLetter = this.getLetter(encryptedCharCode);
//           encryptedMessage += encryptedLetter;
  
//           keyIndex++;
//           if (keyIndex === key.length) {
//             keyIndex = 0;
//           }
//         } else {
//           encryptedMessage += currentLetter;
//         }
//       }
  
//       if (this.reverse) {
//         return encryptedMessage.split("").join('');
//       } else {
//         return this.reverseString(encryptedMessage).split("").join('');
//       }
//     }
  
//     decrypt(encryptedMessage, key) {
//       if (!encryptedMessage || !key) {
//         throw new Error("Incorrect arguments!");
//       }
  
//       encryptedMessage = encryptedMessage.toUpperCase();
//       key = key.toUpperCase();
  
//       let decryptedMessage = "";
//       let keyIndex = 0;
  
//       for (let i = 0; i < encryptedMessage.length; i++) {
//         const currentLetter = encryptedMessage[i];
//         if (this.isLetter(currentLetter)) {
//           const encryptedCharCode = this.getCharCode(currentLetter);
//           const keyCharCode = this.getCharCode(key[keyIndex]);
//           const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26;
//           const decryptedLetter = this.getLetter(decryptedCharCode);
//           decryptedMessage += decryptedLetter;
  
//           keyIndex++;
//           if (keyIndex === key.length) {
//             keyIndex = 0;
//           }
//         } else {
//           decryptedMessage += currentLetter;
//         }
//       }
  
//       if (this.reverse) {
//         return decryptedMessage.split("").join('');
//       } else {
//         return this.reverseString(decryptedMessage).split("").join('');
//       }
//     }
  
//     isLetter(letter) {
//       return this.alphabet.includes(letter);
//     }
  
//     getCharCode(letter) {
//       return letter.charCodeAt(0) - 65;
//     }
  
//     getLetter(charCode) {
//       return this.alphabet[charCode];
//     }
  
//     reverseString(string) {
//       return string.split("").reverse().join("");
//     }
//   }


// function getSeason(date) {
//     if (!date) {
//       return 'Unable to determine the time of year!';
//     }
//     if (!date || typeof date !== 'object' || ((!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') &&
//       typeof date.getMonth !== 'function')) {
//       throw new Error('Invalid date!');
//     }
//     try {
//       date.toISOString();
//     } catch (e) {
//       throw new Error('Invalid date!');
//     }
//     const month = date.getMonth();
//     if (month >= 2 && month <= 4) {
//       return 'spring';
//     } else if (month >= 5 && month <= 7) {
//       return 'summer';
//     } else if (month >= 8 && month <= 10) {
//       return 'autumn';
//     } else {
//       return 'winter';
//     }
//   }