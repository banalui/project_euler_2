/*var number = prompt("Please enter a number");
var sum = 0;
for(i = 0 ; i < number ; i++){
	if((i % 3 === 0) || (i % 5 === 0)){
		sum = sum + i;
	}
}
alert(sum);
*/
var fibN = function(n){
	if(n === 1){
		return 1;
	}
	else if(n === 2){
		return 2;
	}
	else{
		return fibN(n-1) + fibN(n-2);
	}
}

var n = 1;
var sum = 0;
while(fibN(n) <= 4000000){
	if(fibN(n) % 2 === 0){
		sum = sum + fibN(n);
	}
	n++;
}

alert(sum);

