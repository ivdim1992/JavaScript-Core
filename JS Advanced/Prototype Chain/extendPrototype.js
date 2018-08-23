function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(teacherName, teacherEmail, subject) {
            super(teacherName, teacherEmail);
            this.subject = subject;
        }

        toString() {
            return `${super.toString().slice(0, -1)}, subject: ${this.subject})`
        }

    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `${super.toString().slice(0, -1)}, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

function toSpecies(cl) {
    cl.prototype.species = 'Human';
    cl.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

toSpecies(Person)
let person = new Person('Gosho', 'Petkov');

let teacher = new Teacher('Penka', 'Petkova', 'History');

let student = new Student('Pesho', 'Ivanov', 'Math');
Teacher.prototype.species = 'crocodile'
console.log(person.toSpeciesString())
console.log(teacher.toSpeciesString())
console.log(student.toSpeciesString())

person.species = 'Alien';
console.log(person.toSpeciesString())
console.log(person)

console.log(Object.getPrototypeOf(Teacher));



