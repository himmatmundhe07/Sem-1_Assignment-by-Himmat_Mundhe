var income = parseFloat (prompt("Enter Your Annual Income: "));
var incometax;

if(income<=250000)
{
    incometax=0;
}
else if (income<=500000)
{
    incometax=(income-250000)*0.05;
}
else if (income<=1000000)
{
    incometax=(income-250000)*0.20;
}
else
{
    incometax=(income-250000)*0.30;
}

console.log("Your Income Tax is "+incometax+" Rupess");