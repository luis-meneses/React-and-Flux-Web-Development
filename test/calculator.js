var calculator = function (num, num2, operator){
    
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

};




module.exports = calculator;