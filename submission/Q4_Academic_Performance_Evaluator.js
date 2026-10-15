// Q4. Academic Performance Evaluator
// Example marks for five subjects. Replace these with your own marks.
const marks = [88, 91, 79, 86, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !hasFailedSubject) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
