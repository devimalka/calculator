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



let oplist =['/','*','+','-'];
let sum = 0;
let first = "";
let second = "";
let temp = "";
let tempop = "";

let input = "";

let holder = document.getElementById("holder");

function populate(a){
    input = input.concat(a.value);
    holder.placeholder = input;

   if(!oplist.includes(a.value))
   {
    first = first.concat(a.value);
    console.log(first);   
      
   }
   else if(oplist.includes(a.value))
   {
       if(second !="" && first !="")
       {
           sum += operator(tempop,parseInt(second),parseInt(first))
       }
        else{
            second = first;
        first = "";
        tempop = a.value;    

       }
           
   }
   else console.log("no value");
}