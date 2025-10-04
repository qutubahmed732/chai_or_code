let score = "true";

// console.log(typeof score)
// console.log(typeof (score))

let valInNumber = Number(score);
// console.log(typeof valInNumber)
// console.log(valInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0;
// undefined => NaN

let isLoggedIn = "qutub";

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false;
// "" => false;
// "qutub" => true;

let someNumber = 33;
let stringConverNumber = String(someNumber)
// console.log(stringConverNumber)
// console.log(typeof stringConverNumber)



// **************************** Operations ******************************* // 

let value =3 ;
let negValue = -value;
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) // to make an exponent of number in javascript
// console.log(2/2)
// console.log(2%2)


let str1= "Hello"
let str2 = " qutub"
// console.log(str1 + str2) // concatenation

// console.log("1" + 2); 
// console.log(typeof 1 + 2 + "2" + 3 + "4"); // log(3234) type is number without brackets
// console.log(typeof (1 + 2 + "2" + 3 + "4")); // log(3234) type is string with brackets
// console.log(+"")

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num2) 

let gameCounter = 100;
gameCounter++;
console.log(gameCounter)