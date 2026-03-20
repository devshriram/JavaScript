class Person{
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person{
    constructor(name, branch, rollNo) {
        super(name);
        this.branch = branch;
        this.rollNo = rollNo;
    }
    getDetails() {
        return [this.name, this.branch, this.rollNo];
    }
}

class Teacher extends Person{
    constructor(name, teacherId, subject) {
        super(name);
        this.teacherId = teacherId;
        this.subject = subject;
    }
    getDetails() {
        return [this.name, this.teacherId, this.subject];
    }
}

var student = new Student('Shriram','Chemical',81);
var teacher = new Teacher('Dhara', 31, 'Electronics');

console.log(student.getDetails());
console.log(teacher.getDetails());