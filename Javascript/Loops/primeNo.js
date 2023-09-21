var i ;
c = 0;
n = +prompt("enter no to check");

for( i=1; i<=n; i++)

{   
    if(n%i==0)
    c++;
}

if(c==2)
    document.write(n + "Is a Prime Number");

else
    document.write(n + "Is Not a Prime Number");
