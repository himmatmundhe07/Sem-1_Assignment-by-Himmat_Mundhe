var arr=[1,9,8,32,6,50,4,3,2,1];
var even=0, odd=0;
for (var i=0; i<arr.length; i++)
{
    if(arr[i]%2==0)
    {
      even++;
    }
    else
    {
        odd++;
    }
}
console.log("Total even number in array is: ",even+" And odd is: ",odd);