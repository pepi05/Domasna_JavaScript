// 1. Create person object with properties firstName and lastName and add coresponding values.
let person = {
    firstName: 'Mile',
    lastName: 'Milkov',
}

// 2. Print the values of the properties of the object. Use both approaches.
console.log(person.firstName);
console.log(person.lastName);
console.log(person['firstName']);
console.log(person['lastName']);


// 3. Print the whole firstName and lastName of the person.
console.log(person.firstName + ' ' + person.lastName);

// 4. Add the property age and coresponding value to the person object. Use both approaches.
/* person.age = 42; */
person['age'] = 19;
console.log(person);


// 5. Print how old the person is.
console.log(person.age);

// 6. Find the type of the variable person.
console.log (typeof person);


// 7. Create another person object. Populate the object with coresponding values.
let personB = {
    firstName: 'Anastasia',
    lastName: 'Nikolova',
    age: 29,
}
console.log(personB);
    

// 8. Find out which person is older.

/* switch(true) {
    case person.age > personB.age:
        console.log('Older is: ' + person.firstName+ ' ' + person.lastName);
        break;
    case personB.age > person.age :
        console.log('Older is:' + personB.firstName + ' ' + personB.lastName);
        break;
    default:
        console.log('Same age');
} */

if (person.age > personB.age){
    console.log ('Older is:' + person.firstName + ' ' + person.lastName);
    } else if (personB.age > person.age){
        console.log('Older is:' + personB.firstName + ' ' + personB.lastName);
    } else {
        console.log('Same age');
    }





// 9. Find out how many years the person1 is older/younger from person2.
/* switch(true) {
    case (person.age - personB.age) > 0 :
        console.log(person.age - personB.age + ' ' + 'years older');
        break;
    case  (personB.age - person.age) > 0 :
        console.log(personB.age - person.age + ' ' + 'years younger');
        break;
    default:
        console.log('Same age');
            
}  */

if ((person.age - personB.age) > 0){
    console.log((person.age - personB.age) + 'years older');
} else if ((person.age - personB.age) < 0) {
    console.log((personB.age - person.age) + 'years younger');
} else {
    console.log('same age');
}



// 10. Create another person object. Populate the object with coresponding values.
let personC = {
    firstName: 'Nikola',
    lastName: 'Stojanov',
    age: 39,
}




// 11. Find the sum of the years of the people.
let sum = person.age + personB.age + personC.age
console.log('sum of the years is:' + ' ' + sum);

// 12. Find the average of the years of the people.
let avg = (person.age + personB.age + personC.age) / 3;
console.log('the average years:' + ' ' + avg);

// 13. Find out who is the youngest of all three people.
switch (true) {
    case (person.age == personB.age) &&  (person.age == personC.age) :
        console.log(person.firstName + personB.firstName + personC.firstName);
        break;
    case (person.age < personB.age) && (person.age < personC.age) :
        console.log ('The youngest is: ' + person.firstName);
        break;
    case (personB.age < person.age) && (personB.age < personC.age) :
        console.log('The youngest is: ' + personB.firstName);
        break;
    case (personC.age < person.age) && (personC.age < personB.age) :
        console.log('The youngest is: ' + personC.firstName);
        break;
    
    case (person.age == personB.age) && (person.age < personC.age) :
        console.log ('The youngest is: ' + person.firstName + personB.firstName);
        break;
    case (person.age == personC.age) && (person.age < personB.age) :
        console.log('The youngest is: ' + person.firstName + personC.firstName);
        break;
    case (personB.age == personC.age) && (personB.age < person.age) :
            console.log('The youngest is: ' + personB.firstName + personC.firstName);
            break;
}



/* if (person.age <= personB.age && person.age <= personC.age) {
    if (person.age == personB.age && person.age == personC.age) {
        console.log(person.firstName + ',' + personB.firstName + ',' + personC.firstName);
    } else if (person.age == personB.age) {
         console.log(person.firstName + ',' + personB.firstName)
    } else if (person.age == personC.age) {
        console.log(person.firstName + ',' + personC.firstName)
} else {
    console.log(person.firstName)  
}
}
else if (personB.age <= person.age & personB.age <= personC.age) {
    if (personB.age == personC.age) {
        console.log(personB.firstName + ',' + personC.firstName);
    } else {
        console.log(personB.firstName);
    }
}
else {
    console.log(personC.firstName);
} */