import { useState } from "react";
const Custom = () =>
{
    const [count , setCount] = useState(0);
    const [count1 , setCount1] = useState(1000);

    const handleIncrement = () =>{
            setCount(count+1);
            setCount1(count1+1);
    }
    const handleDecrement = () =>{
            setCount(count-1);
            setCount1(count1-1);
    }
    return {
      count,
      count1,
      handleIncrement,
      handleDecrement,
    };

}
export default Custom