Array.prototype.polyfillMap = (mapLogicFn) => {
  let output = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    output.push(mapLogicFn(arr[i], i));
  }
  return output;
  
};
