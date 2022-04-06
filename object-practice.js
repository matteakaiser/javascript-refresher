const student1 = {firstName:"Mattea", lastName:"Kaiser", gpa:3.8 , playVolleyBall: true };
console.log('I know ' + student1.firstName + ' ' + student1.lastName + '!');
console.log(`I know ${student1.firstName} ${student1.lastName}!`);
const student2 = {firstName:"Sally", lastName:"Sally", gpa:1.8 , playVolleyBall: false };
if (student2.playVolleyBall){
    console.log('I know ' + student2.firstName + ' ' + student2.lastName + 'plays volleyball');
} else {
    console.log('I know ' + student2.firstName + ' ' + student2.lastName + ' doesn\'t play volleyball');
}

const students = [ ];
students.push(student1, student2);
console.log(students);

students.push ({firstName:"Katie", lastName:"Gilberg", gpa:4.0 , playVolleyBall: true });
console.log(students);

console.log('I know '+ students[2].firstName + '!')