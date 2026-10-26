// Q4. Array Performance Analyzer

// Create 8 random scores between 30 and 100
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// map() creates a numbered list of student scores
const studentScores = scores.map((score, index) => `Student ${index + 1}: ${score}`);

// Calculate highest and lowest scores
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate average using reduce()
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// filter() counts students who passed
const passedStudents = scores.filter(score => score >= 50).length;

console.log(`
Array Performance Analyzer
--------------------------
${studentScores.join("\n")}
Highest Score : ${highestScore}
Lowest Score  : ${lowestScore}
Average Score : ${averageScore.toFixed(2)}
Passed        : ${passedStudents} / ${scores.length}
`);
