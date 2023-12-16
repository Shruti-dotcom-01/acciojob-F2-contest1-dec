const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((element) => {
    if (element.profession == 'developer'){
      console.log(element);
    } else {
      null;
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt('Enter your name !');
  const age = prompt('Enter your age !');
  const profession  = prompt('Enter your professional');
  data.push({ name, age, profession});
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  res = data.filter((element) => element.profession !== 'admin');
  console.log(res);
}

// 4. Concatenate Array
function concatenateArray() {
  const data2 = [
    { name: 'Maya', age: 27, profession: 'admin'  },
    { name: 'Siya', age: 22, profession: 'designer' },
    { name: 'Riya', age: 26, profession: 'admin' },
    { name: 'Fiya', age: 23, profession: 'admin' },
    { name: 'Jiya', age: 29, profession: 'designer' },
  ];
  let newArray = data.concat(data2);
  console.log(newArray);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  let avgAge = data.forEach((element) => {
    sum += element.age;
  });
  console.log(sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let i = 0; i< data.length; i++){
    const element = data[i];
    if (element.age > 25) {
      console.log('Persons exist, over 25 years old.');
      break;
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProfessionArr = [];
  data.forEach((element) => {
    if(!uniqueProfessionArr.includes(element.profession)){
      uniqueProfessionArr.push(element.profession);
    }
  });
  console.log(uniqueProfessionArr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) => {
    return a.age - b.age;
  });
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((element) => {
    if(element.name == 'john'){
      element.profession = 'Manager';
    }
  });
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let count = 0;
  data.forEach((element) => {
    if (element.profession == 'manager'){
      count += 1;
    }
  });
  console.log(`We have ${count} developers in our system`);
}
