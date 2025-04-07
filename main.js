// Задание №1
let password = 'пароль';
let check = prompt('Введите пароль:');
if (password === check)
    alert('Пароль введен верно');
else
    alert('Пароль введен неправильно');
// Задание №2
let c = prompt('Введите число большее 0 и меньшее 10:');
if ((c > 0) && (c < 10))
    alert('Верно');
else
    alert('Неверно');
// Задание №3
let d = prompt('Напишите одно любое число:');
let e = prompt('Напишите другое любое число:');
if ((d > 100) || (e > 100))
    alert('Верно');
else
    alert('Неверно');
// Задание №4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// Задание №5
let monthNumber = Number(prompt('Введите номер месяца:'));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Это зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Это весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Это лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Это осень');
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