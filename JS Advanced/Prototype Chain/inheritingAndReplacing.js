function toStringExtension() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(teacherName,teacherEmail,subject){
            super(teacherName,teacherEmail);
            this.subject = subject;
        }
        toString(){
            return `${super.toString().slice(0,-1)}, subject: ${this.subject})`
        }

    }

    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course = course;
        }
        toString(){
            return `${super.toString().slice(0,-1)}, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}



let person = new Person('Gosho','Petkov');
console.log(person)

let teacher = new Teacher('Penka','Petkova','History');
console.log(teacher)

let student = new Student('Pesho','Ivanov','Math');
console.log(student)

console.log(person.toString());
console.log(teacher.toString());