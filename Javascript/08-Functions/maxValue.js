function maxArray()
{
    var a =[] , n , i;
    n = +prompt("enter counting");
    max =0;
    for(i=0;i<n;i++)
    {
        a[i] = +prompt("Enter no");
        if(a[i] > max)
        max = a[i];
    }
    document.write( "Entered Numbers:" + a + "<br>");
    document.write("Maximum Numbers:"+ max)
}



/*function primeNumber()
{
var i;
c = 0;
n = +prompt("Enter no to Check");

for (i = 1; i <= n; i++) {
  if (n % i == 0) c++;
}

if (c == 2) document.write(n + "Is a Prime Number");
else document.write(n + "Is Not a Prime Number");
}*/

