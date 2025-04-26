// Задание №1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));
// Задание №2
function isPositive(array) {
    const arrReturn = [];
    let j = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrReturn[j] = array[i];
            j++;
        }
    }
    return arrReturn;
}

function isMale(array) {
    const arrReturn = [];
    let i = 0;
    array.forEach(el => {
        if (el.gender == 'male') {
            arrReturn[i] = el;
            i++;
        }
    });
    return arrReturn;
}
function filter(mas, callback) {
    return callback(mas);
}

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people2, isMale));

// Задание №3
let intervalTimer = setInterval(() => {
    currentDate = new Date();
    console.log(currentDate)
}, 3000);

setTimeout(() => {
    clearInterval(intervalTimer);
    console.log('30 секунд прошло');
}, 30000);

// Задание №4
function delayForSecondTask4(callback) {
    setTimeout(callback(), 1000);
}

delayForSecondTask4(function () {
    console.log('Привет, Глеб!');
})

// Задание №5
function delayForSecondTask5(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecondTask5(() => sayHi('Глеб'));