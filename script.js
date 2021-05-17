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
    /*let sum=1;
    for(let i=0;i<array.length;i++){
        sum*=array[i];
    }
    return sum;*/
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operator(op,num1,num2){
    let results;
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


function display(nums){
     
    let disp = document.getElementsByClassName('disp');
    disp[0].innerHTML=nums;

}





function reply(clickedid){
    
   display(clickedid);
}






