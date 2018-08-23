function result() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot make instance of abstract class Employee.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ` + currentTask);
            this.tasks.push(currentTask)
        }

        getSalary() {
            return this.salary
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on a simple task.')
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on a complicated task.')
            this.tasks.push('is taking time off work.')
            this.tasks.push('is supervising junior workers.')
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push('scheduled a meeting.')
            this.tasks.push('is preparing a quarterly report.')
        }

        getSalary() {
            return super.getSalary() + this.dividend
        }

    }

    return {Employee, Junior, Senior, Manager}
}

result = result();

let guy1 = new result.Junior('pesho', 20);
let guy2 = new result.Senior('gosho', 21);
let guy3 = new result.Manager('ivan', 22);

guy1.salary = 1200;
console.log(guy1)

guy2.salary = 1300;

guy3.salary = 1200;
guy3.divident = 500;
guy3.collectSalary()