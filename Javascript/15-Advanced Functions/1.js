const a = [1,-2, 3, -4, 5, -6, 7, -8, 9, 10]
const firstNeg = (num)=>{
    return num<0;
}
const result = a.find(firstNeg);
console.log(result);