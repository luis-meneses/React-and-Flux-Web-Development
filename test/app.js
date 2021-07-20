var calculator = require('./calculator');

var readline = require('readline-sync');

var num = readline.question("Enter a number: ");
var num2 = readline.question("Enter another number: ");
var operator = readline.question("Please enter an operator (+, - , / , * ) : ");
var result=0;

calculator(num, num2, operator);