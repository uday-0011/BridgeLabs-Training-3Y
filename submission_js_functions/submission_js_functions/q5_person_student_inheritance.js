// Q5: Constructor-function inheritance: Person -> Student

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name); // Set the Person property on this Student object.
    this.branch = branch;
}

// Inherit Person prototype methods.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const student = new Student("Uday", "Computer Science");

student.showName();   // Name: Uday
student.showBranch(); // Branch: Computer Science

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true
