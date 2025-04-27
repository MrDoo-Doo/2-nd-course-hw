// КОД

// Мини-игра №1
let playgame1 = () => {
    let questNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;;
    let userNumber = prompt('Мы загадали число от 1 до 100, угадайте число');
    while (userNumber != questNumber) {
        if (userNumber > questNumber) userNumber = prompt(`${userNumber} больше, чем загаданное число`);
        else if (userNumber < questNumber) userNumber = prompt(`${userNumber} меньше, чем загаданное число`);
    }
    alert(`Молодец, мы действительно загадали число ${userNumber}`);
}

// Мини-игра №2
let playgame2 = () => {
    let answer = 0, variableFirst = 0, variableSecond = 0, operation = '+';
    variableFirst = randomNum();
    variableSecond = randomNum();
    operation = randomMov();
    switch (operation) {
        case '+':
            answer = variableFirst + variableSecond;
            break;
        case '-':
            answer = variableFirst - variableSecond;
            break;
        case '×':
            answer = variableFirst * variableSecond;
            break;
        case ':':
            answer = variableFirst;
            variableFirst *= variableSecond;
            break;
        default:
            alert('Error');
    }
    let userAnswer = prompt(`Реши пример: ${variableFirst} ${operation} ${variableSecond}`);
    if (userAnswer == answer) alert('Правильно')
    else alert(`Неправильно, ответ: ${answer}`)
}

let randomNum = () => {
    return Math.floor(Math.random() * 10);
}

let randomMov = () => {
    const operations = ["-", "+", "×", ":"];
    let operation = operations[Math.floor(Math.random() * 4)];
    return operation;
}

// Мини-игра №3
let playgame3 = () => {
    userText = prompt('Введите текст');
    userTextArr = userText.split('');
    userTextArr.reverse();
    reverseText = userTextArr.join('');
    alert(reverseText);
}

// Мини-игра №4
let playgame4 = () => {
    const RSP = ["камень", "ножницы", "бумага"];
    userChoice = prompt('Поиграем в Камень, Ножницы, Бумагу \nНапишите, что вы выбрали:');
    let i = Math.floor(Math.random() * 3);
    if (RSP[i] === userChoice.toLowerCase()) {
        alert(`Ваш выбор: ${userChoice} \nНаш выбор: ${RSP[i]} \nРезультат: Ничья (* ^ ω ^)`);
    }
    else if (userChoice.toLowerCase() == "камень") {
        switch (i) {
            case 1:
                alert(`Ваш выбор: ${userChoice} \nНаш выбор: ${RSP[i]}` + "\nРезультат: Вы выиграли (´• ω •`)");
                break;
            default:
                alert(`Ваш выбор: ${userChoice} \nНаш выбор: ${RSP[i]} \nРезультат: Мы выиграли (◕‿◕)`);
                break;
        }
    }
    else if (userChoice.toLowerCase() == "ножницы") {
        switch (i) {
            case 2:
                alert(`Ваш выбор: ${userChoice} \nНаш выбор: ${RSP[i]} \nРезультат: Мы проиграли (ノ°益°)ノ`);
                break;
            default:
                alert(`Ваш выбор: ${userChoice} \nНаш выбор: ${RSP[i]} \nРезультат: Вы проиграли (╯︵╰,)`);
                break;
        }
    }
    else if (userChoice.toLowerCase() == "бумага") {
        switch (i) {
            case 0:
                alert(`Ваш выбор: ${userChoice} \nНаш выбор: ${RSP[i]} \nРезультат: Вы победили ＼(＾▽＾)／ `);
                break;
            default:
                alert(`Ваш выбор: ${userChoice} \nНаш выбор: ${RSP[i]} \nРезультат: Мы победили (￢‿￢ )`);
                break;
        }
    }
    else alert('Похоже, вы написали, что-то не то (⌒_⌒;)');
}

// Мини-игра №5
let playgame5 = () => {
    const quiz = [
        {
            question: "Сколько морей омывают Балканский полуостров?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 3
        },
        {
            question: "Какой вид кавалерии предназначался для боевых действий как в конном, так и в пешем строю?",
            options: ["1. Кирасиры", "2. Гусары", "3. Драгуны"],
            correctAnswer: 3
        },
        {
            question: "Какой химический элемент назван в честь злого подземного гнома?",
            options: ["1. Кобальт", "2. Гафний", "3. Теллур"],
            correctAnswer: 1
        }
    ]
    let countTrue = 0;
    let userAnswer;
    for (i = 0; i < quiz.length; i++) {
        userAnswer = prompt(quiz[i].question + "\n" + quiz[i].options[0] + "\n" + quiz[i].options[1] + "\n" + quiz[i].options[2]);
        if (userAnswer == quiz[i].correctAnswer) {
            alert('Верно');
            countTrue++;
        }
        else alert('Неверно');
    }
    alert(`Количество правильных ответов: ${countTrue} из ${quiz.length}`);
}

// Мини-игра №6
