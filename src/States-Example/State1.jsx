// function addition() {
//     return setCount(count + 1)
// }
// function substraction() {
//     return setCount(count > 0 ? count - 1 : 0);
// }
// function reset() {
//     return setCount(0)
// }
{/* <button onClick={addition}>Add Num</button>
<button onClick={substraction}>Remove Num</button>
<button onClick={reset}>Reset</button> */}
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
