function add(a,b){
    return a+b;

}

function substract(a,b){
    if(a>b){
        return a-b;
    }
    else{
        return b-a;
    }

}

function multiply(a,b){
    
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operator(op,num1,num2){
   
    switch(op){
        case '+':
          return add(num1,num2);
            break;
        case '-':
          return substract(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        case '*':
           return multiply(num1,num2);
            break;
        default:
            alert("enter valid operator");

    }
   
}

let firstDigit=null;
let secondDigit = null;
let tempStore="";
let tempValue="";
let displayValue = "";
let display = document.getElementsByClassName('disp');
let firstOperator,secondOperator;
let sumall;



function updateDisplay(){
    display[0].innerHTML = sumall;
}

function send(btn){
    if(btn == '+' || btn == '-' || btn == '/' || btn == '*' || btn == '='){
       tempStore = "";
       tempStore = tempValue;
       tempValue = "";
    }
    else{
        tempValue+=btn;
        
    }
}


function swapValues(){
            firstDigit = sumall;
            secondDigit = null;
            firstOperator = secondOperator;
            secondOperator = null;
}

function returnValue(passoperator){
    switch(passoperator){
        case '+':
            sumall = add(firstDigit,secondDigit);
            swapValues();
            break;
        case '/':
            sumall = divide(firstDigit,secondDigit);
            swapValues();
            break;
        case '*':
            sumall = multiply(firstDigit,secondDigit);
            swapValues;
            break;
        case '-':
            sumall = multiply(firstDigit,secondDigit);
            swapValues;
            break;
        case '=':
                         
            
    }
}

function storeValues(value){
        if(firstDigit == null && secondDigit == null){
            firstDigit = parseFloat(tempStore);
            firstOperator = value;
        }
        else if(firstDigit != null && secondDigit == null){
            secondDigit = parseFloat(tempStore);
            secondOperator = value;
        }
      
        console.log(firstDigit,secondDigit,firstOperator,secondOperator);
}