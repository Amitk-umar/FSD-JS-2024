function module1(callback) {
    console.log("Module 1 is completed");
    callback();  
}

function module2(callback) {
    console.log("Module 2 is completed");
    callback(); 
}

function module3() {
    console.log("Module 3 is completed");
}
module1(()=>{
    module2(()=>{
module3();
    })
})

