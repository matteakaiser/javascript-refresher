const students = ['Nathalie', 'Mattea','Annie','Masha','Katie', 'Alea'];

console.log(students);

students.push('Crissy');

console.log(students);

for (let i = 0; i < students.length; i++) {
    console.log(students[i])
  }

  for(let name of students){
      console.log(name);
  }

 students.sort();
console.log(students);

students[3]='Katherine';
console.log(students);
