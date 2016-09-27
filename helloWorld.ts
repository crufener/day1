console.log("hello world");

//This is a debugger statement.  Its like a break point.
//debugger;

function fizz(num) {
	return (num%3 === 0);

}

function buzz(num) {
	return (num%5 === 0) ;
}

function fizzAndBuzz(num) {
	return (num%5 === 0 && num%3 === 0) ;
}

function bizzBuzz(num) {
	var result = "";
	for (var i = 1; i <= num; i++) {
		if(fizz(i)) result +="fizz, ";
		else if(buzz(i)) result+="buzz, ";
		else if(fizzAndBuzz(i)) result+="fizzBuzz, ";
		else{ result += i.toString() + ", ";}
	}
	console.log(result);
	return result;
};

console.log(bizzBuzz(100));
let priceAsString = "10.15abc";
let priceAsNumber = parseFloat(priceAsString);
console.log(`String to a number using '+' operator: ${typeof priceAsNumber}`);

//ES2015 AND TYPESCRIPT
let dogAge;
dogAge = 2.5;

let dogName = "Haboc";
console.log(dogName);
console.log(`The dog ${dogName} is ${dogAge} years old!`);


let number1:number = 1;
let number2: number = 2;
console	.log(number1 + number2);


//enum**********************************
enum ProductStatus {
	InStock, OutOfStock, UnKnown
}

let available = ProductStatus.OutOfStock;
console.log(available);


// var myFalse = false;
// var myTrue = true;
// function toTen() {
// 	if (myTrue){
// 		console.log(1);
// 	}
// }
