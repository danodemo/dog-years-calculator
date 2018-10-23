//My age at the time of writing
const myAge = 33;
//This is the number of early years available
var earlyYears = 2;
earlyYears *= 10.5;
//Who knows why I did this, I'm just following orders
var laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears, laterYears);
//The following will give my age in dog years
var myAgeInDogYears = laterYears + earlyYears;

var myName = 'Dan'.toLowerCase();
//Now let's use these to make a simple statement in the console
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);