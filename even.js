const prompt = require("prompt-sync")();

// let a;
// a = prompt("Enter 1st Number : ")
// if(a % 2 == 0){
//     console.log("Number is even");
// }
// else{
//     console.log("Number is Odd");
// }

// pricelist=[3400, 5601, 4600, 22, 23];
// for(let i of pricelist){
//     if(i % 2 == 0){
//         console.log(i);
// }
// }
let age = prompt("Enter your age : ");
if (age < 25) {
    const userdata = [
        {
            name: "Amit Kumar",
            age: 18,
            id: "2229979"
        },
        {
            name: "Raghav sharma",
            age: 21,
            id: "2246445"
        },
        {
            name: "Raghav sharma",
            age: 21,
            id: "5145445"
        }
    ];
    for (let i in userdata){
    console.log(userdata[i].id);
    } 
} else {
    console.log("You are not eligible for this job");
}
