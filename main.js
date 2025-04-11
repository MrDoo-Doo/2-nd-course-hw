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

}

// Задание №1
const min = (a, b) => {
    if (a < b) return console.log(a);
    else return console.log(b);
}

min(5, 67);
min(19, 23);
// Задание №2
const isEven = (a) => {
    if (a % 2 === 0) return console.log('Число чётное');
    else return console.log('Число нечётное');
}

isEven(10);
isEven(101);
// Задание №3
const sqr = (a) => {
    return a * a;
}

let numSqr = sqr(6);
console.log(numSqr);
console.log(sqr(7));
// Задание №4
const userAge = () => {
    let age = prompt('Сколько Вам лет?');
    if (age < 0) return alert('Вы ввели неправильное значение');
    else if (age <= 12) return alert('Привет, друг!');
    else if (age >= 13) return alert('Добро пожаловать!');
}

userAge();
// Задание №5
const num = (a, b) => {
    if (isNaN(a) || isNaN(b)) console.log('Одно или оба значения не являются числом');
    else console.log(a * b);
}

num(14, 'hello');
num(3, 7);
// Задание №6
const isNum = () => {
    let a = prompt('Введите число');
    if (isNaN(a)) console.log('Переданный параметр не является числом');
    else console.log(a + ' в кубе равняется ' + a * a * a);
}

isNum();
// Задание №7
function getArea() {
    return this.radius * this.radius * 3.14;
}

function getPerimeter() {
    return 2 * this.radius * 3.14;
}

const circle1 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter
}

let circle2 = {
    radius: 3,
    area: getArea,
    perimeter: getPerimeter
}

console.log(`Площадь первого круга равна ${circle1.area()}`);
console.log(`Периметр первого круга равна ${circle1.perimeter()}`);
console.log(`Площадь второго круга равна ${circle2.area()}`);
console.log(`Периметр второго круга равна ${circle2.perimeter()}`);