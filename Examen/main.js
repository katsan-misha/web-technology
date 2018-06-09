for(var i = 1; i < 101; i++){
	if(i%15 == 0)console.log("FizzBuzz");
	else if(i%5 == 0)console.log("Buzz");
	else if(i%3 == 0)console.log("Fizz");
	else console.log(i);
}
console.log("///////////////////////////////////");
var i = 1;
while(i < 101){
	if(i%15 == 0)console.log("FizzBuzz");
	else if(i%5 == 0)console.log("Buzz");
	else if(i%3 == 0)console.log("Fizz");
	else console.log(i);
	i++;
}
console.log("///////////////////////////////////");
var i = 1;
do{
	if(i%15 == 0)console.log("FizzBuzz");
	else if(i%5 == 0)console.log("Buzz");
	else if(i%3 == 0)console.log("Fizz");
	else console.log(i);
	i++;
}while(i < 101);

