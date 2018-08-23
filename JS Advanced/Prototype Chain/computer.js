function result() {
    class System {
        constructor(manufacturer) {
            if (new.target === System) {
                throw new Error('Can not inherit System')
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends System {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor extends System {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery extends System {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer extends System {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Abstract class can not be initiated')
            }
            super(manufacturer);
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery
        }

        set battery(value) {
            if (value instanceof Battery) {
                return this._battery = value;
            } else {
                throw new TypeError('Not instance of class Battery')
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard
        }

        set keyboard(value) {
            if (value instanceof Keyboard) {
                return this._keyboard = value
            } else {
                throw new TypeError('Value is not instance of Keyboard')
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor) {
                return this._monitor = value;
            } else {
                throw new TypeError('Value is not instance of Monitor')
            }
        }
    }

    return {Keyboard,Monitor,Battery,Computer,Laptop,Desktop}
}

let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);

console.log(keyboard)