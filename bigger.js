// To find biggest number among three integers  //
const prompt = require("prompt-sync")();

var a,b,c;
a=parseInt(prompt("Enter the value of a:"));
b=parseInt(prompt("Enter the value of b:"));
c=parseInt(prompt("Enter the value of c:"));
if(a>b){
    console.log("A is bigger number :",a);
}
else if(b>c){
    console.log("B is bigger number :",b);
}
else{
    console.log("C is bigger number :",c);
}


