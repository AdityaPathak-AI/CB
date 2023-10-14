// (function(a,b){return a-b})

//Assosciative Array in Javascript
var arr = new Object();
arr[one] = 1;
arr[two] = 2;
arr[three] = 3;
for(i in arr){
    console.log(arr[i]);
}

//multidimensional array

var array = Array(Array(10,11),Array(12,13))
for(var i=0 ; i<array.length ;i++){
        for(var j = 0 ; j<array[i].length ; j++){
            document.write(array[i]+array[j] + " ")
        }
        document.write("<br>");
}