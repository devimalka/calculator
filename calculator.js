function add(a,b){
    return a+b;
}


function substract(a,b){
    return a-b;

}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function operator(op,a,b){
    switch(op){
        case "+":
            return add(a,b);
            break;
        case "-":
            return substract(a,b);
            break;
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
            break;
        default:
            console.log("Enter valid operator")
            return null;
    }
}

