/*Задание 1.
Напишите функцию, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/
const cat = {
	name: 'Apollo',
	breed: 'Bengala',
	color: 'spotted',
	pedigree: '24b'
}

function returnKeysAndValues(cat) {
	for (let key in cat) {

		if (cat.hasOwnProperty(key)) {
			console.log(`${key}: ${cat[key]}`);
		};
	};
};

returnKeysAndValues(cat);

