// Q2. Multi-Type Data Summary
const userName = "Uday";                 // string
const age = 20;                          // number
const isStudent = true;                  // boolean
const skills = ["Java", "JavaScript"];   // array
const student = { name: "Uday", age: 20 }; // object
const middleName = null;                 // null
let phoneNumber;                         // undefined

// Array.isArray() is needed because typeof [] returns "object".
const report = [
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "skills", Value: skills.join(", "), Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "student", Value: JSON.stringify(student), Type: typeof student },
    { Label: "middleName", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "phoneNumber", Value: phoneNumber, Type: typeof phoneNumber }
];

console.table(report);
