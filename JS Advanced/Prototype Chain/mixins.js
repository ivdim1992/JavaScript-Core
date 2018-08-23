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
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
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
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
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


function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        };
        classToExtend.prototype.isFast = function () {
           return this.processorSpeed > (this.ram / 4)
        };
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer
                && this.manufacturer === this.monitor.manufacturer
        };
        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black')
                && this.weight < 3;
        }
    }

    return {computerQualityMixin,styleMixin}
}