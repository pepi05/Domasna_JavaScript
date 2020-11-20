let fruits = ['Apple', 'Banana', 'Orange'];
let students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];

// 1. Loop through the arrays and print the elements.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (i = 0; i < students.length; i ++) {
    console.log(students[i]);
}




// 2. Loop through the students array and print:
//     a. the properties of the objects.
for (let prop in students[0]) {
    console.log(prop);
}



//     b. the values of the properties in the objects.
for (let value of students) {
    console.log(value);
}


// 3. Create a loop and print the first 10 numbers.
for (i = 0; i <= 9; i++) {
    console.log('First ten numbers: ' +i);
}

/* let broj = 1;
while (broj <= 10) {
    console.log(broj);
    broj++;
} */

// 4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
for (let even = 0; even <= 10; even += 2) {
    console.log('Even numbers: ' + even);
}

/* let num = 0
while (num <= 10){
    console.log('Even num: ' + num);
    num += 2
} */

// a. starting from 0 && using a conditional statement (increase the counter for 1)
for (let even = 0; even <= 10; even ++) {
    if (even % 2 == 0) {
        console.log(even);
    }
}

/* let number = 0;
while (number <= 10) {
    if (number % 2 == 0){
        console.log('even num: ' + number);
    }
    number++;
} */



// 5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
for (let odd = 1; odd <= 10; odd +=2) {
    console.log('Odd numbers: ' +odd);
}
//     a. starting from 0 && using a conditional statement (increase the counter for 1)
 
for (let j = 0; j <=10; j++) {
    if ( j % 2 == 1) {
        console.log('Odd numbers: ' + j);
    }
}


// 6. Find a way to check the type of the array (except for the typeof command).
console.log(Array.isArray(fruits));   //true

switch (true) {
    case Array.isArray(fruits) :
    console.log('Array');
    break;
    default:
        console.log('not an array');
}