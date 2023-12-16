import { useState } from "react";

const App1 = () => {
    const [count , setCount] = useState(0)

    var handleIncrement = () =>{
        setCount(count + 1)
    }

    return <div>
        <h1>Count is : {count}</h1>
        <button onClick={handleIncrement}>Change Value
        </button>
    </div>
};
export default App1;
