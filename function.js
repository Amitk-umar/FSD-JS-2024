const prompt = require("prompt-sync")();
// var a,b;
// a=parseInt(prompt("Enter the first number:"));
// b=parseInt(prompt("Enter the second number:"));
// function mycourse(a,b){
//     if(a>b){
//         console.log("a is greater than b");
//         return a;
//     }
//     else if(b>a){
//         console.log("b is greater than a");
//         return b;
// }
// }
// console.log(mycourse(a,b));


// function asyncMethod(){
//   let stopinterval =  setTimeout(()=>{
//         console.log("API is loading.......");
//     },2000);
//     setTimeout(()=>{
//         clearInterval(stopinterval);
//     },2000)
//     setTimeout(()=>{
//         console.log("Data of Hotel is fetching.......");
//     },3000);
//     setTimeout(()=>{
//         console.log("API is loading.......");
//     },9000);
//     setTimeout(()=>{
//         console.log("Hotel is found");
//     },9000);
//     setTimeout(()=>{
//         console.log("Successfully fecthed the data from the API 1");
//     },9000);
// }
// asyncMethod();


// let result;
// let finalPromise = new Promise((resolve, reject)=>{
//     result = ()=>{
//         return 2*2;
//     }
//     resolve(result());
// })

// finalPromise.then(()=>{
//     // console.log("promise resolved ");
//     console.log(result());
// }).catch(()=>{
//     console.log("promise rejected");
// })




let finalpromise = new Promise((res,rej)=>{
let n = parseInt(prompt("Enter lenght of array :"))
for(i=0;i<n;i++){
    let a = parseInt(prompt("Enter elements in array :"))
    if(a%2==0){
     res(a);
    }
    else{
        rej(' error is found');
    }
}
})
finalpromise.then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
});

