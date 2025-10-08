var sub1 = parseFloat(prompt("Enter Maeks of 1st Subject:"));
var sub2 = parseFloat(prompt("Enter Maeks of 2nd Subject:"));
var sub3 = parseFloat(prompt("Enter Maeks of 3rd Subject:"));
var sub4 = parseFloat(prompt("Enter Maeks of 4th Subject:"));
var sub5 = parseFloat(prompt("Enter Maeks of 5th Subject:"));

var sum = sub1 + sub2 + sub3 + sub4 + sub5;
pr = (sum * 100) / 500;
console.log("You got " + pr + "% Percentage");

if (pr <= 100 && pr >= 0) {
    if (pr >= 90) {
        console.log("Grade A");
    }
    else if (pr < 90 && pr >= 80) {
        console.log("Grade B");
    }
    else if (pr < 80 && pr >= 70) {
        console.log("Grade C");
    }
    else if (pr < 70 && pr >= 60) {
        console.log("Grade D");
    }
    else {
        console.log("Fail");
    }
}
else {
    console.log("invalid Input");
}