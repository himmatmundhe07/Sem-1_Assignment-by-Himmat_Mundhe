var unit = parseFloat(prompt("Enter Units Consumed: "));
var bill;

if (unit <= 100) {
    bill = unit * 5;
}
else if (unit >= 100 && unit <= 300) {
    bill = unit * 7;
}
else {
    bill = unit * 10;
}

console.log("Your Electricity is " + bill + " Rupess");