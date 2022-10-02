const btnClicked = document.querySelectorAll(".number");
const operatorClicked = document.querySelectorAll(".operator");
let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");
const equalsKey = document.querySelector('.equals-key');
const showResult = document.querySelector('.result');

currentOperand.textContent = '';
previousOperand.textContent = '';

function getSum(num1 , num2){
    return num1+num2;

};
function getSubtract(num1 , num2){
    return num1 - num2;
};
function getMultiply (num1,num2){
    return num1*num2;
}
function getDivide(num1,num2){
    return num1/num2;
}
let operator = ['+' , '-' , '*' , '/'];
function operate(operator , number1 , number2){
    switch(operator){
        case '+':
            getSum(number1,number2);
        case '-':
            getSubtract(number1,number2);
        case '*':
            getMultiply(number1,number2);
        case '/':
            getDivide(number1,number2);
    }
    
}
let firstnumber= '';
let storednumber= '';
let result = '';
let operatorclick = '';
currentOperand = 0;

btnClicked.forEach((number) => {
    number.addEventListener('click' ,function(){
        storednumber += number.value;
        previousOperand.textContent += storednumber;

    })

});
operatorClicked.forEach((operator) => {
    operator.addEventListener('click', function(){
        firstnumber = storednumber;
        operatorclick = operator.textContent;
        previousOperand.textContent= storednumber + operatorclick;
        storednumber='';
        console.log('FirstNumber' + firstnumber + 'Stored' + storednumber);
        console.log(operatorclick);
    })
});
const calculate = () => {
    const showResult = operate(operatorClicked ,parseFloat(firstnumber), parseFloat(storednumber));
  
    currentOperand.textContent = showResult;
    
    }
equalsKey.addEventListener('click' ,calculate());
