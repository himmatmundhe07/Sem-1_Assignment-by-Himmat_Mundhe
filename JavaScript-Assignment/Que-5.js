var num1 = parseFloat (prompt("Enter 1st Number: "));
var num2 = parseFloat (prompt("Enter 2nd Number: "));
var num3 = parseFloat (prompt("Enter 3rd Number: "));

if(num1 > num2)
{
    if(num1>num3)
    {
        console.log(num1+" is Largest");
    }
    else
    {
        console.log(num3+" is Largest");
    }
}
else if (num2>num1)
{
    if(num2>num3)
    {
        console.log(num2+" is Largest");
    }
    else
    {
        console.log(num3+" is Largest");
    }
}
else
{
    console.log(num3+" is Largest");
}