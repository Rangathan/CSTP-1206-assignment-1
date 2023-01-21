//Question 1
let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 95, 99] },
{ name: "Bob", email: "bob@gmail.com", marks: [100, 99, 95, 85, 99] }
];


function studentWithHighestMarks(array) {
    let biggestAverage = 0;
    let studentName;
    array.forEach((item) =>{
        let marks = item.marks;
        let total = marks.reduce((acc, val) => acc + val, 0);
        let average = total / marks.length;
        if (average > biggestAverage){
            biggestAverage =average;
            studentName = item.name;
        }
    })

    return studentName;
}
console.log(studentWithHighestMarks(student))


// Question 2
array = [20, -2, 4, -11, 0, 25];

function minimumValue(array) {
    return Math.min(...array);
}

console.log(minimumValue(array) );


//Question 3

let word = 'helloworld'

function lengthOfString(string) {
    let stringLen = [...string];
    return stringLen.length;
} 

console.log(lengthOfString(word));