// 1. Declare variables and use the assignment operators ( print the results)
let a = 6;
let b = 3;
b += 5;
console.log(b);   //vrednosta na b ja sobira so 5

a =5;
b=3;
a -= b;
console.log(a);  // vrednosta na a ke bide 5-3

a=3;
b=3;
b *= a;
console.log(b); // b=3*3

a=8;
b=4;
a /= 2;
console.log(a); // vrednosta na a ke ja podeli so 2, i toa ke bide nova vrednost za a

a=10;
a %= 4;
console.log(a);  // go pecati ostatokot pri delenje na 10 so 4 a toa e 2




// 2. Try out the two kind of alerts that have been studied.
window.alert('Press any key');
window.confirm ('Leave page?');

// 3. Try out the different types of loggings in the console
console.log('Hello world');
console.table(['dog', 'cat', 'pig']); //creates table to the console
console.error('Wrong key');  // error message in the console

// * Bonus: Try and find out new types of loggings in the console

console.info('Welcome to my page'); //writes a message to the console

console.clear(); //method clears the console

console.group(['dog', 'cat', 'pig']); //Creates a new inline group

let team = {name: 'Manchester' , country: 'United Kingdom'}
console.dir(team); //displays an interactive list of the properties of the specified object

console.count(team);  //1
console.count(team);  //2
console.count(team);  //3
console.count(team); //number of times that call to count(team) has been called
console.count(['dog', 'cat', 'pig']);  //1st time
console.count(['dog', 'cat', 'pig']);  //2nd time

console.warn('Stop that!'); //Outputs a warning message to the Web Console
console.time(team); //Starts a timer to track how long an operation takes
console.timeEnd(team); //stop the timer and get the time output to the console


