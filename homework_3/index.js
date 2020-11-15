// 1. Write a JavaScript conditional statement to sort three numbers. Print the result.
let num1 = 111;
let num2 = 13;
let num3 = 150;

/*if (num1 > num2 && num1 > num3 && num2 > num3) {
   console.log(num1 + ',' + num2 +',' + num3);
}
else if (num1 > num2 && num1 > num3 && num3 > num2) {
    console.log(num1 + ',' + num3 +',' + num2);
 }
else if (num2 > num1 && num2 > num3 & num1 > num3) {
    console.log(num2 + ',' + num1 +',' + num3);
}
else if (num2 > num1 && num2 > num3 & num3 > num1) {
    console.log(num2 + ',' + num3 +',' + num1);
}
else if (num3 > num1 && num3 > num2 & num2 > num1) {
    console.log(num3 + ',' + num2 +',' + num1);
}
else  {
    console.log(num3 + ',' + num1 +',' + num2);
} */


// nacin2
if (num1 > num2 && num1 > num3){
    if (num2 > num3){
        console.log(num1 + ',' + num2 + ',' +num3);
    } else {
        console.log(num1 + ',' + num3 + ',' +num2);
    }
}
else if (num2 > num1 && num2 > num3){
    if (num1 > num3){
        console.log(num2 + ',' + num1 + ',' + num3);
    } else {
        console.log(num2 + ',' + num3 + ',' + num1);
    }
}
else if (num3 > num1 && num3 > num2) {
    if (num1 > num2){
        console.log(num3 + ',' + num1 + ',' + num2);
    }else {
        console.log(num3 + ',' + num2 + ',' +num1);
    }
}







// 2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.
let a = 55;
let b = 821;
let c = 155;
let d = 201;
let e = 245;

if (a > b && a > c && a > d && a > e){
    console.log('The largest number is:' + a);
} 
else if (b > a && b > c && b > d && b > e){
    console.log('The largest number is:' + b);
}
else if (c > a && c > b && c > d && c > e){
    console.log('The largest number is:' + c);
}
else if (d > a && d > b && d > c && d > e){
    console.log('The largest number is:' + d);
}
else {
    console.log('The largest number is:' + e);
}



// 3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade. 
// Student_Name	Marks
// David	        80
// Vinoth	        77
// Divya	        88
// Ishitha	        95
// Thomas	        68

// Range	Grade
// <60	    F
// <70	    D
// <80	    C
// <90	    B
// <100	A

let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;
let avg = (David + Vinoth + Divya + Ishitha + Thomas) / 5;
console.log('Average is:' + avg);

if(avg < 60){
    console.log('Grade is: F');
}
else if(avg < 70){
    console.log('Grade is: D');
}
else if(avg < 80){
    console.log('Grade is: C');
}
else if(avg < 90){
    console.log('Grade is: B');
}
else if(avg < 100){
    console.log('Grade is: A');
}




// 4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).

// nacin 1 so data object
/*let time = new Date().getHours();
if(time < 12){
    console.log('Good morning');
}
else if( time >= 12 && time <= 17){
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
} */


// nacin 2 so zadadena vrednost za time:
let time = 22;
if (time < 12){
    console.log('Good morning');
}
else if (time >= 12 && time <=17){
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}





// 5. For a given day, print out whether it is a day of the work week or weekend.
/* let day = new Date().getDay(); //Sunday = 0 Saturday = 6
if (day > 0 && day < 6 ){
    console.log('It is a day of the work week');
} 
else {
    console.log('It is a weekend day');
} */

// nacin 2:
let day = 'Saturday';
if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday'){
    console.log('It is a day of the work week');
} 
else if (day == 'Saturday' || day == 'Sunday'){
    console.log('It is a weekend day');
}
else {
    console.log('Wrong input');
}








// 6. For a given month, print out in which season it belongs.
let month = 'May';

if (month == 'Dec' || month == 'Jan' || month == 'Feb'){
    console.log('Winter');
}
else if (month == 'Mar' || month == 'Apr' || month == 'May'){
    console.log('Spring');
}
else if (month == 'Jun' || month == 'Jul' || month == 'Aug'){
    console.log('Summer');
}
else if (month == 'Sep' || month == 'Oct' || month == 'Nov'){
    console.log('Autumn')
}
else {
    console.log('Invalid month');
}

