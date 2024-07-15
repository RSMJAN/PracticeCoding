getName();
console.log(x);

var x = 3;
let a = 9;

console.log(x);
console.log(getName);
console.log(y); 
function calculateSum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById('sumResult').textContent = "Sum: " + sum;
}

function getName(){
    console.log("Namaste JavaScript");
    console.log("My name is Rushika");
}
