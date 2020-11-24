  // 1. Write a function to find first and last digit of a number.
  
function number (num) {
    return num % 10;
   
}
let lastDigit = number (1234562);
console.log(lastDigit);




// 2.  Write a function to reverse the following array (manually and  using .reverse array method )
// input array = [10, 20, 30, 40, 50]
// output array = [50, 40, 30, 20 ,10]
let a = [10,20,30,40,50];
 function reverseArray (input) {
    let newArr = new Array;
    for (let i = input.length-1; i >= 0; i--) {
        newArr.push(input[i]);
    }
    return newArr;
}
let b = reverseArray (a);
console.log(b); 




// 3. Write a functions to calculate the perimeter and the area of a square
function perimeterSquare (a) {
    return 4*a;
}
let resultPerimeterS = perimeterSquare (4);
console.log('The perimeter of a square is: ' + resultPerimeterS);

function areaSquare (b) {
    return Math.pow(b,2);
}
let resultAreaS = areaSquare (5);
console.log('Area of a square is : ' + resultAreaS);


// 4. Write a functions to calculate the perimeter and the area of a rectangle
function perimeterRectangle (a,b) {
    return 2*a + 2*b;
}
let resultPerimeterRec = perimeterRectangle (4,6);
console.log ('Rectangle perimeter: ' + resultPerimeterRec);

function areaRectangle (w,h) {
    return w*h;
}
let resultAreaRec = areaRectangle (2,5);
console.log('Rectangle area : ' + resultAreaRec);


// 5. Write a functions to calculate the perimeter and the area of a circle
function perimeterCircle (r) {
    const pi = 3.14;
    return pi*(2*r)
}
let resultPerimeterCir = perimeterCircle (5);
console.log('Circle perimeter: ' + resultPerimeterCir);


function areaCircle (r) {
    const pi = 3.14;
    return pi * Math.pow(r,2);
}
let resultAreaCir = areaCircle (6);
console.log('circle area : ' + resultAreaCir);

// 6. Write a function to return the last n elements from a given array (manually and  using .reverse array method)
// ** n and the array should be parameters in the function
let asd = [1,2,3,4,5,6,7,8];
let bsd = asd.reverse();
function reverseArr (n) {
    return bsd.slice(-n); 
}
let result = reverseArr (3)
console.log(result);
