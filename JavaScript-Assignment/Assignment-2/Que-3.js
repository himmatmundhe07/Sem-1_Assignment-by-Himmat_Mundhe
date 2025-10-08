var sum=0, avg=0;
var arr=[10,9,8,7,6,5,4,3,2,1];
for (var i=0; i<arr.length; i++)
{
    sum+=arr[i];
}
avg=sum/arr.length;
console.log("Avrage Of this array is: ",avg);