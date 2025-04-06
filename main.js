/*
// Задание №1
let a = 10;
alert(a);
a = 20;
alert(a);
// Задание №2
const iYear = 2007;
alert(iYear);
// Задание №3
const authorJS = 'Брендан Эйх';
alert(authorJS);
// Задание №4
a = 10;
let b = 2;
alert((a + b) + ", " + (a - b) + ", " + a * b + ", " + a / b);
// Задание №5
let result = 2 ** 5;
alert(result);
// Задание №6
a = 9;
b = 2;
alert(a % b);
// Задание №7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// Задание №8
let age = 0;
age = prompt("Сколько вам лет?");
alert(age);
// Задание №9
let user = {
    name: 'Alexey',
    age: 22,
    isAdmin: false
}
alert("Имя: " + user.name + "\nВозраст: " + user.age + "\nПрава администратора: " + user.isAdmin);
// Задание №10
let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName}!`);
// Задание+
let number = prompt("Загадайте любое число: ");
let number1 = number * 2;
alert(number1);
number1 += 10;
alert(number1);
number1 /= 2;
alert(number1);
number1 -= number;
alert("Ответ: 5");
*/
// Задание №1

let password = 'пароль';
let check = prompt('Введите пароль:');
(password === check) ? alert('Пароль введен верно') : alert('Пароль введен неправильно');
// Задание №2
let c = prompt('Введите число большее 0 и меньшее 10:');
((c > 0) && (c < 10)) ? alert('Верно') : alert('Неверно');
// Задание №3
let d = prompt('Напишите одно любое число:');
let e = prompt('Напишите другое любое число:');
((d > 100) || (e > 100)) ? alert('Верно') : alert('Неверно');
// Задание №4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// Задание №5
let monthNumber = Number(prompt('Введите номер месяца:'));
switch (monthNumber) {
    case 1:
        alert('Это зима');
        break;
    case 2:
        alert('Это зима');
        break;
    case 3:
        alert('Это весна');
        break;
    case 4:
        alert('Это весна');
        break;
    case 5:
        alert('Это весна');
        break;
    case 6:
        alert('Это лето');
        break;
    case 7:
        alert('Это лето');
        break;
    case 8:
        alert('Это лето');
        break;
    case 9:
        alert('Это осень');
        break;
    case 10:
        alert('Это осень');
        break;
    case 11:
        alert('Это осень');
        break;
    case 12:
        alert('Это зима');
        break;
    default:
        alert('Нет такого месяца');
}
// Задание №1+
let num = prompt('Пожалуйста, введите любое число:');
let nn = isNaN(num);
if (nn == false) {
    (num % 2 == 0) ? alert('Это число чётное') : alert('Это число нечётное');
}
else alert('Это не число');
// Задание №2+
let clientOS = prompt('Какая ОС у клиента (0/1):');
if (clientOS == 0) {
    alert('Установите версию приложения для iOS по ссылке');
}
else if (clientOS == 1) {
    alert('Установите версию приложения для Android по ссылке');
}
else {
    alert('Ошибка');
}
// Задание №3+
let clientYear = prompt('Какого года Ваш телефон:');
if (clientOS == 0) {
    if (clientYear < 2015) {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    }
    if (clientYear >= 2015) {
        alert('Установите версию приложения для iOS по ссылке');
    }
}
else if (clientOS == 1) {
    if (clientYear < 2015) {
        alert('Установите облегченную версию приложения для Android по ссылке');
    }
    if (clientYear >= 2015) {
        alert('Установите версию приложения для Android по ссылке');
    }
}
else {
    alert('Ошибка');
}