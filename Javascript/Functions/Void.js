function outerFunc(a, b) {
  function innerFunc(a, b) {
    return a + b;
  }

  const result = innerFunc(a, b);

  return result;
}

console.log(outerFunc(10, 10));
console.log(outerFunc(10, 20)); 
