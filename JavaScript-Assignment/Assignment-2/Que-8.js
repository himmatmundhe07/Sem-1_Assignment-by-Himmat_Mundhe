var arr=[10,9,-8,7,6,0,4,-23,2,1];
var positive=0,negative=0,zero=0;
for (var i=0; i<arr.length; i++)
{
    if(arr[i]>0)
    {
        positive++;
    }
    else if (arr[i]<0)
    {
        negative++;
    }
    else
    {
        zero++;
    }
}
console.log("Total Positive Number in array",positive);
console.log("Total Negative Numner in array",negative);
console.log("Total Zero in array",zero);