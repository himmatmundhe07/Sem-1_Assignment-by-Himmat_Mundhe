var arr=[1,9,8,7,6,50,4,3,2,1];
var max=arr[0];
for (var i=0; i<arr.length; i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log("Largest Number In Array is:",max);
