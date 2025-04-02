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