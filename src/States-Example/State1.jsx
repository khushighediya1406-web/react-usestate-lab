import { useState } from "react";
function State1() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add Num</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Remove Num</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}
export default State1;
