 people = [
    {fname: 'David', lname: 'Rayy', age: 34}, 
    {fname: 'Suzanne', lname: 'Collins', age: 38}, 
    {fname: 'Walter', lname: 'Isaacson', age: 24}, 
    {fname: 'John', lname: 'Doe', age: 51}, 
    {fname: 'Jane', lname: 'Donnson', age: 20}
]; 

// Calculate the sum of the ages - people array
 let sum = people.reduce((ac,a) => a.age + ac,0);
console.log(sum); 


// Find the people that are older than 36
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 36) {
        console.log('Older than 36 are: ' + people[i].fname);
    }
}


// Find the people that are smaller than 24
for (i = 0; i < people.length; i ++) {
    if (people[i].age < 24) {
        console.log('Smaller than 24 is: ' + people[i].fname)
    }
}


// Find the person with the longest name





 numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
// Multiply every element by 3 
for (let i = 0; i < numbers.length; i++) {
    let result = numbers[i] * 3;
    console.log(`${numbers[i]} * 3 = ${result}`);
}




// Sort the numbers (ascending and descending)
numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
numbers.sort((a, b) => {
    return a - b
});
console.log(numbers);

numbers.sort((a,b) => {
    return b - a
});
console.log(numbers);



// Find the sum of the numbers
let suma = numbers.reduce((a,b) => {
    return a + b;
});
console.log('Sum is: ' + suma);

// Find max and min in the array
/* console.log ('The max number is: ' + Math.max(...numbers));
console.log ('The min number is: ' + Math.min(...numbers)); */
let max = numbers.reduce((a,b) => {
    return Math.max(a,b);
});
console.log(max);

let min = numbers.reduce((a,b) => {
    return Math.min(a,b);
})
console.log(min);


// Find second largest element in the array
numbers.sort((a,b) => {
    return b-a;
})
console.log('2nd largest element in the array is : ' + numbers[1]);




// Find the total numbers of even and odd elements in the array
numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
let rez = [];
for (i = 0; i < numbers.length; i ++){
    if (numbers[i] % 2 == 0){
        rez.push(numbers[i]); 
    };
}
console.log ('Total numbers of even elements: ' + rez.length);

let rez2 = [];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        rez2.push(numbers[i]);
    }
}
console.log('Total numbers of odd elements: ' + rez2.length);





// Count number of digits in a number
let broj = 123456;
let brojTotal = broj.toString();
console.log(brojTotal.length);





// Print the following pattern
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

 


// Write a program to find power of a number.
let numA = 5;
console.log('Power of a number is: ' + Math.pow(numA,3)); //5 na 3ti stepen 5*5*5


 array = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]
// Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration

/* for (i = 0; i < array.length; i++){

    if (array[i] % 5 == 0 && array[i] <= 150) {
        console.log(array[i]);
    }
} */

for (i = 0; i < array.length; i++){
    switch(true){
        case array[i] > 150 :
            break;
        case array[i] % 5 == 0 :
            console.log(array[i]);
    }
}