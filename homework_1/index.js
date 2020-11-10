1. //Декларирај променливи од сите примитивни типови.
let name = 'Petar';  //promenliva od tip string
let year = 1993; //promenliva od tip number
let answer = true; // promenliva od tip boolean
let a   // promenliva od tip undefined
let b = null; //promenliva od tip object


// 2. Испечати ги соодветно вредностите и типовите на променливите.
console.log('vrednosta na promenlivata e: ' + name + ' od tip: ' + typeof(name));
console.log('vrednosta na promenlivata e: ' + year + ' od tip: ' + typeof(year));
console.log('Vrednosta na promenlivata e: ' + answer + ' od tip: ' + typeof(answer));
console.log('Vrednosta na promenlivata e: ' + a + ' od tip:' + typeof(a));
console.log('Vrednosta na promenlivata e: ' + b + ' od tip:' + typeof(b));


// 3. Промени ја вредноста на некоја од променливите.
name = 'Aleksandar';
year = '1990';
console.log(name);
console.log(year);


// 4. Креирај константа и обиди се да и доделиш нова вредност. Што се случува?
const country = 'Macedonia';
console.log(country);
//pojavuva greska vo 28 linija bidejki country e konstanta so vrednost Macedonia koja ne moze da ja menuvame vo tekot na cel proekt
// country = 'North Macedonia';
// console.log(country);


// 5. Декларирај променливи и употреби ги аритметичките оператори (да се испечатат резултатите)
let num1 = 3;
let num2 = 10;

console.log('Zbirot e:' + (num1 + num2));
console.log(num1 - num2);
console.log(num2 / num1);
console.log(num1 * num2);
console.log('Ostatokot od delenjeto e:' + (num2 % num1));   

num1++;  //ja zgolemuvame vrednosta na num1 za 1
num2++;  //ja zgolemuvame vrednosta na num2 za 1
console.log(num1);   
console.log(num2);

// 6. Декларирај променливи и употреби ги операторите за споредба (да се испечатат резултатите)
num1 = 5;
num2 = 6;

console.log(num1 == num2);  //dali 2ta broja imat ista vrednost
console.log(num1 === num2); //dali vrednosta i tipot na 2ta broja e isti
console.log (num1 != num2); //dali imat razlicna vrednost
console.log(num1 !== num2); //sporedba spored vrednost i tip
console.log(num1 > num2);
console.log(num2 >= num1);
console.log(num1 < num2);
console.log(num1 <= num2);




// 7. Декларирај променливи и употреби ги логичките оператори (да се испечатат резултатите)
num1 = 3;
num2 = 3;
console.log(num1 == num2 && num2 > 0); //ke vrati true bidejki se ispolneti 2ta uslovi
console.log(num1 < 0 || num2 == num1); //ke vrati true bidejki e ispolnet barem 1 od uslovite
console.log(!(num1 == num2)); // negacija od true uslov ke vrati false