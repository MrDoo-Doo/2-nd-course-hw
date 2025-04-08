// Задание №1
let a = 1;
while (a <= 2) {
    console.log('Привет');
    a++;
}
// Задание №2
let b = 1;
while (b <= 5) {
    console.log(b);
    b++;
}
// Задание №3
let c = 7;
while (c <= 22) {
    console.log(c);
    c++;
}
// Задание №4
let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (let key in obj) {
    console.log(`${key}: - зарплата ${obj[key]} долларов`);
}
// Задание №5
let n = 1000;
do {
    n /= 2;
} while (n >= 50)
console.log(n);
// Задание №6
let friday = 2;
do {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
} while (friday <= 31);
// Задание №1-1
let iterations = 0;
let k = 100;
while (k >= 0) {
    k -= 7;
    iterations++;
}
// Задание №1-2

// Задание №1-3
let book = {
    Название: 'Вино из одуванчиков',
    Автор: 'Рэй Брэдбери',
    "Год издания": 1957,
    Жанр: 'Роман'
}
for (let page in book) {
    console.log(`${page}: ${book[page]}`);
}