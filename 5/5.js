/*Задание 5.
Перепишите консольное приложение из предыдущего юнита на классы.
Общие требования:
Имена классов, свойств и методов должны быть информативными.
Соблюдайте best practices.
Используйте синтаксис ES6.*/

class Electrical {
    constructor(watt, hourson) {
        this.watt = watt;
        this.hourson = hourson;
    }

    consumption() {
        console.log(`Consumption: ${this.watt * this.hourson} KW`);
    }

    turnedOn() {
        console.log(`ON`);
    }

    turnedOff() {
        console.log(`OFF`);
    }
}

class Device extends Electrical {
    constructor(watt, hourson, model, size) {
        super(watt, hourson);
        this.model = model;
        this.size = size;
    }
}

class Computer extends Device {
    constructor(model, size, disk) {
        super("60", "8", model, size);
        this.disk = disk;
    }
}

class TV extends Device {
    constructor(model, size, resolution) {
        super("180", "12", model, size);
        this.resolution = resolution;
    }
}

let pc = new Computer("HP", "13 inc", "256 GB");
let tv = new TV("Samsung", "78 inc", "4k");

console.log(pc);
pc.turnedOn();
pc.consumption();

console.log(tv);
tv.turnedOn();
tv.consumption();