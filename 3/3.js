/*Задание 3.
Напишите функцию, которая создает пустой объект, но без прототипа.*/ 

function createNullObj () {
    Object.create(null)
}

function createObject() {
    const obj = Object.create(null);
    return obj;
}

console.log(createObject());


