var readline = require('readline-sync');

var num = readline.question("Enter a number: ");
var num2 = readline.question("Enter another number: ");
var operator = readline.question("Please enter an operator (+, - , / , * ) : ");
var result=0;

if(operator == "+"){
    operator= "suma";
    result = parseInt(num)+parseInt(num2);
} else if(operator == "-"){
    operator= "resta";
    result = parseInt(num)-parseInt(num2);
}else if(operator == "/"){
    operator= "division";
    result = parseInt(num)/parseInt(num2);
}else if(operator == "*"){
    operator= "multiplicacion";
    result = parseInt(num)*parseInt(num2);
}

console.log("Your result of: " +" operator "+ operator +" of " + num +" and "+num2 + " is : "+result);
