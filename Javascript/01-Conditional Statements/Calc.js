var a = +(prompt("Enter first number:"))
var b = +(prompt("Enter second number:"))

var operation = +prompt("Choose operation from \n 1)+  \n 2)-  \n 3)*  \n 4)/ ");
var result

switch(operation){
    case 1:
        result=a+b;
        document.write(result)
        break;

    case 2:
        result = a-b;
        document.write(result)
        break;

    case 3:
        result = a*b;
        document.write(result)
        break;

    case 4:
        result = a/b;
        document.write(result)
        break;

    default:
        document.write("Inavlid Keys");

}

