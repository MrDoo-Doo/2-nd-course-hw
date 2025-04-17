// КОД
// КОД
let playgame1 = () => {
    let questNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;;
    let userNumber = prompt('Мы загадали число от 1 до 100, угадайте число');
    while (userNumber != questNumber) {
        if (userNumber > questNumber) userNumber = prompt(`${userNumber} больше, чем загаданное число`);
        else if (userNumber < questNumber) userNumber = prompt(`${userNumber} меньше, чем загаданное число`);
    }
    alert(`Молодец, мы действительно загадали число ${userNumber}`);
}

let playgame2 = () => {
    let answer = 0, a = 0, b = 0, c = '+';
    a = ranNum();
    b = ranNum();
    c = ranMov();
    switch (c) {
        case '+':
            answer = a + b;
            break;
        case '-':
            answer = a - b;
            break;
        case '×':
            answer = a * b;
            break;
        case ':':
            answer = a;
            a *= b;
            break;
        default:
            alert('Error');
    }
    let userAnswer = prompt(`Реши пример: ${a} ${c} ${b}`);
    if (userAnswer == answer) alert('Правильно')
    else alert(`Неправильно, ответ: ${answer}`)
}
let ranNum = () => {
    return Math.floor(Math.random() * 10);
}
let ranMov = () => {
    y = Math.floor(Math.random() * 4);
    switch (y) {
        case 0:
            x = '+';
            break;
        case 1:
            x = '-';
            break;
        case 2:
            x = '×';
            break;
        case 3:
            x = ':';
            break;
        default:
            x = '+';
            break;
    }
    return x;
}
// Задание №1
const mas1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <= mas1.length; i++) {
    console.log(mas1[i]);
    if (mas1[i] == 10) break;
}
// Задание №2
const mas2 = [1, 5, 4, 10, 0, 3];
let four = mas2.indexOf(4);
console.log(four);
// Задание №3
const mas3 = [1, 3, 5, 10, 20];
let masInline = mas3.join(' ');
console.log(masInline);
// Задание №4
const mas4 = [[], []];
for (a = 0; a < 3; a++) {
    mas4[a] = [];
    for (b = 0; b < 3; b++) {
        //    mas4[a].push(1);
        mas4[a][b] = 1;
    }
}
console.log(mas4);
// Задание №5
const mas5 = [1, 1, 1];
for (i = 0; i < 3; i++) {
    mas5.push(2);
}
console.log(mas5);
// Задание №6
const mas6 = [9, 8, 7, 'a', 6, 5];
const mas6_1 = mas6.filter(n => isNaN(n) == false);
mas6_1.sort();
console.log(mas6_1);
// Задание №7
const mas7 = [9, 8, 7, 6, 5];
let userEl = +prompt('Угадай какая цифра есть в массиве');
if (mas7.includes(userEl)) alert('Угадал');
else alert('Не угадал');
// Задание №8
let str = 'abcdef';
const mas8 = str.split('');
mas8.reverse();
str = mas8.join('');
console.log(str);
// Задание №9
const mas9 = [[1, 2, 3], [4, 5, 6]];
const mas9_1 = [];
for (i = 0; i < mas9.length; i++) {
    mas9_1.push(...mas9[i]);
}
console.log(mas9_1);
// Задание №10
const mas10 = [5, 7, 8, 6, 1, 8, 3, 9, 0];
for (i = 0; i < mas10.length - 1; i++) {
    console.log(mas10[i] + mas10[i + 1]);
}
// Задание №11
const masSqr_f = (arr) => {
    const masSqr = arr.map(el => el * el);
    console.log(masSqr);
}
const mas11 = [5, 7, 8, 6, 1, 8, 3, 9, 0];
masSqr_f(mas11);
// Задание №12
const masLen_f = (arr) => {
    const masLen = arr.map(el => el.length);
    console.log(masLen);
}
const mas12 = ['frost', 'mario', 'fish', 'dog'];
masLen_f(mas12);
// Задание №13
const masNeg_f = (arr) => {
    const masNeg = arr.filter(el => el < 0);
    console.log(masNeg);
}
const mas13 = [5, -7, 8, 6, -1, -8, 3, -9, 0];
masNeg_f(mas13);
// Задание №14
const mas14 = [];
for (i = 0; i < 10; i++) {
    mas14[i] = Math.floor(Math.random() * 10);
}
const mas14_1 = mas14.filter(el => el % 2 == 0);
console.log(mas14);
console.log(mas14_1);
// Задание №15
const mas15 = [];
let avg = 0;
for (i = 0; i < 6; i++) {
    mas15[i] = Math.floor(Math.random() * 10);
    avg += mas15[i];
}
console.log(mas15);
console.log(avg / 6);