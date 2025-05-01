// Задание №1
const textEl1 = document.querySelector('.text1');
const buttonEl1 = document.querySelector('.button1');
buttonEl1.addEventListener('click', () => {
    textEl1.classList.toggle("hide");
    if (buttonEl1.textContent === "Показать") {
        buttonEl1.textContent = "Скрыть";
    }
    else buttonEl1.textContent = "Показать";
});
// Задание №2
const textEl2 = document.querySelector('.text2');
const buttonEl2 = document.querySelector('.button2');
buttonEl2.addEventListener('click', () => {
    textEl2.classList.add("color");
});
// Задание №3
const textEl3 = document.querySelector('.text3');
const buttonEl3 = document.querySelector('.button3');
buttonEl3.addEventListener('click', () => {
    textEl3.textContent = "Привет, мир!";
});
// Задание №4
const textEl4 = document.querySelectorAll('.description1');
textEl4.forEach(element => {
    element.textContent = "Измененный текст";
});
// Задание №5
const textEl5 = document.querySelectorAll('.description2');
textEl5.forEach(element => {
    element.textContent = "Новый текст";
});
// Задание №6
const containerEl6 = document.querySelector('.container6');
const buttonEl6 = document.querySelector('.button6');
buttonEl6.addEventListener('click', () => {
    const newEl = document.createElement('h4');
    newEl.textContent = 'Новый абзац';
    containerEl6.appendChild(newEl);
});
// Задание №7
const buttonEl7 = document.querySelector('.button7');
buttonEl7.addEventListener('click', () => {
    const textEl7 = document.querySelector('.description7');
    if (textEl7) {
        textEl7.remove();
    }
});