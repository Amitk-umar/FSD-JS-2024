const prompt = require("prompt-sync")();
let customer = [
    {
        customerid: '12',
        customername: 'Raghav Sharma',
        offerletter: 'Accepted',
        salary: 10000,
        joiningdate: 'tomorrow'
    },
    {
        customerid: '15',
        customername: 'Ravi Sharma',
        offerletter: 'Accepted',
        salary: 10000,
        joiningdate: 'tomorrow'
    },
    {
        customerid: '16',
        customername: 'Amit Kumar',
        offerletter: 'Accepted',
        salary: 10000,
        joiningdate: 'tomorrow'
    }
];
// by map

let user = customer.map((item) => {
   return item.customername;
});
console.log(user);


//by for each
// customer.forEach((name) => {
//     console.log(name);
// });
