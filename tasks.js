// Задание №1
let strok1 = 'js'
console.log(strok1.toUpperCase());
// Задание №2
const strokFunc = (arr, model) => {
    arr.forEach(el => {
        arrNew = arr.filter(el => el.toLowerCase().startsWith(model.toLowerCase()))
    });
    console.log(arrNew);
}
const mas2 = ['Кружка', 'Кружка-непроливайка', 'Стакан', 'Деревянная кружка'];
let ref = 'кружка';
strokFunc(mas2, ref);
// Задание №3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
// Задание №4
const mas4 = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...mas4));
console.log(Math.min(...mas4));
// Задание №5
const ranFun = () => {
    ranNum = Math.round(Math.random() * 10);
    console.log(ranNum);
}
ranFun();
// Задание №6
const ranMas = () => {
    max = prompt('Введите максимальное число');
    ranArr = [];
    for (i = 0; i < max / 2; i++) {
        ranArr[i] = Math.round(Math.random() * max);
    }
    console.log(ranArr);
}
ranMas();
// Задание №7
const ranNumber = () => {
    min = +prompt('Введите минимальное число');
    max = +prompt('Введите максимальное число');
    Num = Math.round(Math.random() * (max - min) + min);
    console.log(Num);
}
ranNumber();
// Задание №8
let Date8 = new Date();
console.log(Date8);
// Задание №9
let currentDate = new Date();
let inDays = +currentDate + 73 * 24 * 60 * 60 * 1000;
let futureDate = new Date(inDays);
console.log(futureDate);
// Задание №10
const DateFun = () => {
    DateToday = new Date();
    dayweek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
    months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    fullDate = "Дата: " + DateToday.getDate() + " " + months[DateToday.getMonth()] + " " + DateToday.getFullYear() + " — это " + dayweek[DateToday.getDay()];
    fullTime = "Время: " + DateToday.getHours() + ":" + DateToday.getMinutes() + ":" + DateToday.getSeconds();
    console.log(fullDate);
    console.log(fullTime);
}
console.log(DateFun());