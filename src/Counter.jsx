import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0); // intialization

    // increment only 1
    // let incCount = () => {
    //     setCount(count + 1);
    // }

    //  using callback fn 

    let incCount = () => {

        // Callback function
        setCount((currCount) => {
            return currCount + 1;
        });

        setCount((currCount) => {
            return currCount + 1;
        });
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}