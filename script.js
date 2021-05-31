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


let hiddenvalue = document.getElementsByClassName("hiddenvalue");

let score = "";


function display(nums){
    
    let disp = document.getElementsByClassName('disp');
    disp[0].innerHTML+=nums;

}



function reply(clickedid){
    if(clickedid=="+"|| clickedid=='/'|| clickedid=='*'||clickedid=='-' || clickedid == '='){
        score = "";
    }
    else{
    score+=clickedid;
    console.log(score);
    }
    display(clickedid);
       
}


function checkop(first,second){
    if(second != null && first !=null){
        return true;
    }
    else{
        return false;
    }

}


let firstoperand = null;
let secondoperand = false;
let sums;
let operand;
let second = null;
let first=null;
let secondo = false;

function operatorHandle(op){
    if(first==null && second==false){
        first = op;
    }
    else if(first =!null && second == false){
        secondo = op;
    }

}

function sum(op)
{
    
    let check = parseFloat(op);
    if(isNaN(check)){

        if(firstoperand == null && secondoperand == false){
            firstoperand = parseFloat(score);
            operatorHandle(op);
        }
        else if(firstoperand !=null && secondoperand == false){
            secondoperand = parseFloat(score);
            operatorHandle(op);
           
        }
        else if(first !=null && secondoperand !=null){
            if(first='+'){
                sums = add(firstoperand,secondoperand);
                console.log(sums);
                first = secondo;
                secondo = false;
            }
        }


    }
   
       console.log(firstoperand,op,secondoperand);
            
}

        
