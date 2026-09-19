//Инициализация всех игр
document.addEventListener('DOMContentLoaded', () => {
  // Игра 1: Угадай число
  const buttonGame1 = document.querySelector('#game1 .play__button');
  if (buttonGame1) buttonGame1.addEventListener('click', startGuessNumberGame);

  // Игра 2: Простая арифметика
  const buttonGame2 = document.querySelector('#game2 .play__button');
  if (buttonGame2) buttonGame2.addEventListener('click', startArithmeticGame);

  // Игра 3: Переверни текст
  const buttonGame3 = document.querySelector('#game3 .play__button');
  if (buttonGame3) buttonGame3.addEventListener('click', startReverseTextGame);

  // Игра 4: Викторина
  const buttonGame4 = document.querySelector('#game5 .play__button');
  if (buttonGame4) buttonGame4.addEventListener('click', startQuizGame);

  // Игра 5: Камень, ножницы, бумага 
  const buttonGame5 = document.querySelector('#game4 .play__button');
  if (buttonGame5) buttonGame5.addEventListener('click', startRPSGame);

   // Игра 6: Генератор случайных цветов
  const buttonGame6 = document.querySelector('#game6 .play__button');
  if (buttonGame6) buttonGame6.addEventListener('click', startColorGeneratorGame);
});

  

//Игра 1: Угадай число
function startGuessNumberGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guessed = false;

  alert('Я загадал число от 1 до 100. Попробуй угадать!');

  while (!guessed) {
    let userInput = prompt('Введите число от 1 до 100:');
    if (userInput === null) {
      alert('Игра отменена.');
      return;
    }
    const userNumber = Number(userInput);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
      alert('Пожалуйста, введите корректное число от 1 до 100.');
      continue;
    }
    attempts++;
    if (userNumber === randomNumber) {
      alert(`Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
      guessed = true;
    } else if (userNumber < randomNumber) {
      alert('Загаданное число БОЛЬШЕ. Попробуйте ещё раз.');
    } else {
      alert('Загаданное число МЕНЬШЕ. Попробуйте ещё раз.');
    }
  }
}

//Игра 2: Простая арифметика
function startArithmeticGame() {
  const operations = ['+', '-', '*', '/'];
  const op = operations[Math.floor(Math.random() * 4)];

  let num1, num2, correctAnswer;

  if (op === '/') {
    num2 = Math.floor(Math.random() * 10) + 1;
    const multiplier = Math.floor(Math.random() * 10) + 1;
    num1 = num2 * multiplier;
    correctAnswer = multiplier;
  } else {
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    if (op === '+') correctAnswer = num1 + num2;
    else if (op === '-') correctAnswer = num1 - num2;
    else correctAnswer = num1 * num2;
  }

  const question = `${num1} ${op} ${num2}`;
  const userAnswer = prompt(`Решите пример: ${question}`);

  if (userAnswer === null) {
    alert('Игра отменена.');
    return;
  }

  const answerNum = Number(userAnswer);
  if (isNaN(answerNum)) {
    alert('Пожалуйста, введите число.');
    return;
  }

  if (answerNum === correctAnswer) {
    alert(`✅ Верно! ${question} = ${correctAnswer}`);
  } else {
    alert(`❌ Ошибка! ${question} = ${correctAnswer}. Вы ответили ${answerNum}.`);
  }
}

//Игра 3: Переверни текст
function startReverseTextGame() {
  let text = prompt('Введите любой текст, и я переверну его:');
  if (text === null) {
    alert('Игра отменена.');
    return;
  }
  const reversed = text.split('').reverse().join('');
  alert(`Исходный текст: ${text}\nПеревёрнутый текст: ${reversed}`);
}

//Игра 4: Викторина
function startQuizGame() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  let correctCount = 0;
  for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];
    const userAnswer = prompt(`${q.question}\n${q.options.join('\n')}\nВведите номер ответа (1, 2 или 3):`);
    if (userAnswer === null) {
      alert('Викторина прервана.');
      return;
    }
    const answerNum = Number(userAnswer);
    if (answerNum === q.correctAnswer) {
      correctCount++;
      alert('✅ Правильно!');
    } else {
      alert(`❌ Неправильно. Правильный ответ: ${q.options[q.correctAnswer - 1]}`);
    }
  }
  alert(`Викторина окончена! Вы дали ${correctCount} правильных ответов из ${quiz.length}.`);
}

//Игра 5: Камень, ножницы, бумага
function startRPSGame() {
  const choices = ["камень", "ножницы", "бумага"];
  
  let userChoice = prompt("Ваш выбор: камень, ножницы или бумага?").toLowerCase().trim();
  
  if (userChoice === null) {
    alert("Игра отменена.");
    return;
  }
  
  if (!choices.includes(userChoice)) {
    alert("Некорректный ввод. Нужно ввести: камень, ножницы или бумага.");
    return;
  }
  
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  let result;
  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы победили! 🎉";
  } else {
    result = "Вы проиграли! 😢";
  }
  
  alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
}

// Игра 6: Генератор случайных цветов
function startColorGeneratorGame() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  
  document.body.style.backgroundColor = randomColor;
  
  alert(`Фон изменён на цвет: ${randomColor}`);
}