//1
function min(a, b) {
    return a < b ? a : b;
}

//2
function evenOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

//3
function printSquare(num) {
    console.log(num * num);
}
function returnSquare(num) {
    return num * num;
}

//4
function checkAge() {
    let age = prompt('Сколько вам лет?');
    age = Number(age);
    if (age < 0) alert('Вы ввели неправильное значение');
    else if (age >= 0 && age <= 12) alert('Привет, друг!');
    else if (age >= 13) alert('Добро пожаловать!');
    else alert('Вы ввели неправильное значение');
}

//5
function multiplyIfNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Одно или оба значения не являются числом';
    return a * b;
}

//6
function cubeOrError() {
    let n = Number(prompt('Введите число:'));
    if (isNaN(n)) return 'Переданный параметр не является числом';
    return `${n} в кубе равняется ${n ** 3}`;
}

//7
const circle1 = {
    radius: 5,
    getArea() { return Math.PI * this.radius ** 2; },
    getPerimeter() { return 2 * Math.PI * this.radius; }
};
const circle2 = {
    radius: 10,
    getArea() { return Math.PI * this.radius ** 2; },
    getPerimeter() { return 2 * Math.PI * this.radius; }
};