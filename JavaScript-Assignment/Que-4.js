
var age = parseFloat(prompt("Enter Your Age: "));

if (age >= 0 && age <= 105) {
  if (age < 18) {
    console.log("You are not Eligible for Vote");
  }
  else {
    console.log("You are Eligible for Vote");
  }
}
else {
  console.log("Enter Proper Age");
}