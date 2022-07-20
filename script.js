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


function operator(operator,a,b){
    switch(operator){
        case '-':
            return substract(a,b);
            break;
        case '+':
            return add(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;


    }
}



let btns = document.querySelectorAll("button");

btns.forEach(button=>{
    button.addEventListener('click',function(event){
        console.log(event)
    })
})