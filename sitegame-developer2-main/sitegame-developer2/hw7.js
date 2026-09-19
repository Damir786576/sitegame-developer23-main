//1
console.log('js'.toUpperCase()); 

//2
function filterByStart(arr, str) {
  const lowerStr = str.toLowerCase();
  return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}
console.log(filterByStart(['apple', 'apricot', 'banana'], 'ap')); 

//3
const num = 32.58884;
console.log(Math.floor(num)); 
console.log(Math.ceil(num));   
console.log(Math.round(num));   

//4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers)); 
console.log(Math.max(...numbers));

//5
function random1to10() {
  console.log(Math.floor(Math.random() * 10) + 1);
}
random1to10();

//6
function randomArray(n) {
  const length = Math.floor(n / 2);
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (n + 1)));
  }
  return result;
}
console.log(randomArray(10));

//7
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 15));

//8
console.log(new Date());

//9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

//10
function formatDate(date) {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среду',
                    'четверг', 'пятницу', 'субботу'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `Дата: ${day} ${month} ${year} — это ${weekday}\nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));