let myModule = function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(teacherName,teacherEmail,subject){
            super(teacherName,teacherEmail)
            this.subject = subject;
        }
    }

    return {
        Teacher:Teacher,
        Person:Person
    }
}


let Teacher = myModule().Teacher;
let teacher = new Teacher('Gosho','Ivanov')
console.log(teacher)