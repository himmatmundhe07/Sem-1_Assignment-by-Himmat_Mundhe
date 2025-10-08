var arr=[10,9,8,11,6,5,4,3,2,1];
var limit = 4;
for (var i=arr.length-1; i>=0; i--)
{
    if(arr[i]>limit)
    {
        console.log(arr[i]);
    }
}