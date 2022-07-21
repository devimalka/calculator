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



let btns = document.querySelectorAll(".number");

btns.forEach(button=>{
    button.addEventListener('click',function(event){
    populateDisplayValue(button.innerHTML)
    })
})

function populateDisplayValue(value){
    let displayValue = document.getElementById('displayvalue');
    if (displayValue.innerHTML == 'Dummy data'){
        displayValue.innerHTML = value;
    }
    else {
        displayValue.innerHTML = displayValue.innerHTML + value;
    }
}



let clearbtn = document.querySelector('.clear');

clearbtn.addEventListener('click',function(){
    let displayvalue = document.getElementById('displayvalue');
    displayvalue.innerHTML = '';
})

let operatorbtns = document.querySelectorAll('.operator');
operatorbtns.forEach(btn=>{
    btn.addEventListener('click',function(event){
        console.log(btn.innerHTML);
    })
})