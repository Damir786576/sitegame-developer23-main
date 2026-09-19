//1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}

//2
const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

//3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

//4
const matrix = [];
for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = 1;
    }
}
console.log(matrix);

//5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

//7
const arr7 = [9, 8, 7, 6, 5];
const guess = prompt('Угадай число из массива [9,8,7,6,5]');
alert(arr7.includes(Number(guess)) ? 'Угадал' : 'Не угадал');

//8
const str = 'abcdef';
console.log(str.split('').reverse().join(''));

//9
const arr9 = [[1, 2, 3], [4, 5, 6]];
console.log(arr9.flat());

//10
const arr10 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

//11
function squares(arr) {
    return arr.map(n => n * n);
}
console.log(squares([2, 3, 4]));

//12
function lengths(arr) {
    return arr.map(s => s.length);
}
console.log(lengths(['hello', 'world', 'js']));

//13
function negatives(arr) {
    return arr.filter(n => n < 0);
}
console.log(negatives([-1, 2, -3, 4, -5]));

//14
const randArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evens = randArr.filter(n => n % 2 === 0);
console.log('Исходный массив:', randArr);
console.log('Чётные значения:', evens);

//15
const randArr6 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const avg = randArr6.reduce((sum, n) => sum + n, 0) / randArr6.length;
console.log('Массив:', randArr6);
console.log('Среднее арифметическое:', avg);