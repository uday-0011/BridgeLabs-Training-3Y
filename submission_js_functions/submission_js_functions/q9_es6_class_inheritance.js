// Q9: Rewrite Person -> Student inheritance using ES6 classes

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls Person's constructor.
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const student = new Student("Uday", "Computer Science");

student.showName();   // Name: Uday
student.showBranch(); // Branch: Computer Science

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true

// This produces the same inheritance behaviour as Q5:
// Student inherits showName() from Person and defines showBranch().
