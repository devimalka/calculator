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

    if(a == 0|| b ==0 ){
        alert("cant divide by 0 Zero divison error");
    }
    else{
        return a/b;

    }
    return 0;
}


function operator(operator,a,b){
    a = Number(a);
    b = Number(b);
    let output = 0;
    switch(operator){
        case '-':
            output= substract(a,b);
            break;
        case '+':
            output =add(a,b);
            break;
        case '/':
            output =  divide(a,b);
            break;
        case '*':
            output =  multiply(a,b);
            break;


    }
    return output;
    
}


let operatorfalse = false;
let num1 = '';
let num2 = '';
let tmpoperator = '';
let tmpoperator2 = '';


let displayValue = document.getElementById('displayvalue');


function init(){
    num1 = '';
    num2 = '';
    tmpoperator = '';
    tmpoperator2 = '';
    displayValue.innerHTML = '';
}

const numbtns = document.querySelectorAll('.number');
numbtns.forEach(btn=>{
    btn.addEventListener('click',function(event){
  
        if (!operatorfalse){
            num1+=btn.innerHTML;
            
        }
        else{
            num2+=btn.innerHTML;
           
           
        }

    })
})


const opbtns = document.querySelectorAll('.operator');



opbtns.forEach(btn=>{
    btn.addEventListener('click',function(event){
        console.log("num1 is " + num1);
        console.log("num2 is "+ num2);
        console.log(btn.innerHTML);
    if (btn.innerHTML != '='){
        if(num1 && (!num2)){
            operatorfalse = true;
            tmpoperator = btn.innerHTML;
    
          }
          if(num1 && num2){
            console.log("sum is "+ operator(tmpoperator,num1,num2));
            num1 = operator(tmpoperator,num1,num2);
            num2 = '';
            tmpoperator = btn.innerHTML;
          }
    }
    else{
        if(Number(num1)==0 && Number(num2)==0){
            alert("No Values!");
        }

      
        else if((Number(num1)!=0) && (Number(num2)!=0))
        {
            console.log("sum is "+ operator(tmpoperator,num1,num2));
            num1 = operator(tmpoperator,num1,num2);
            num2 = '';
            tmpoperator = btn.innerHTML;
            displayValue.innerHTML = num1;
            num1 = num1.toString();
            operatorfalse = false;
          }
    }
      
    })
})

const kbds = document.querySelectorAll('.kbd');
kbds.forEach(kbd=>{
    kbd.addEventListener('click',function(event){
        displayValue.innerHTML += kbd.innerHTML;
    })
})


const clearbtn = document.querySelector('.clear');
clearbtn.addEventListener('click',function(event){
    init();
})


document.addEventListener("keypress",function(event){

        d = document.getElementById(event.key)
        if (d != null){
            console.log(d);
        }
})