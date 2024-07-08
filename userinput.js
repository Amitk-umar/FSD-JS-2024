const prompt = require("prompt-sync")();
const maxInputs = 5;
const inputs = [];


for (let i = 0; i < maxInputs; i++) {
    inputs.push(prompt(`Enter input ${i + 1}: `));
}


const extraInput = prompt('Do you want to enter more? (yes/no): ').toLowerCase();
if (extraInput === 'yes') {
    console.log('Limits Exceed');
} else if (extraInput === 'no') {
    console.log('Your inputs are:', inputs);
} else {
    console.log('Invalid response.    ');
}
