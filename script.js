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



const btns = document.getElementsByTagName("button")
function printfunct(){
    console.log("HI")
}


for(var i=0;i<btns.length;i++){
    console.log(btns[i])
    btns[i].addEventListener('click',console.log("test"));
}

