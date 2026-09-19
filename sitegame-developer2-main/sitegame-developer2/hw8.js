//1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

//2
function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];
console.log(filter(people2, isMale));

//3
let counter = 0;
const interval = setInterval(() => {
  console.log(new Date());
  counter += 3;
  if (counter >= 30) {
    clearInterval(interval);
    console.log("30 секунд прошло");
  }
}, 3000);

//4
function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

//5
function delayForSecond2(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) cb();
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond2(() => sayHi('Глеб'));