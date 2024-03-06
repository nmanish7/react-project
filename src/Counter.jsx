import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div className="d-flex flex-column">
                <h1>Count: {count}</h1>
                <button className="d-block btn btn-primary" onClick={increment}>
                    Increment
                </button>
            </div>
        </>
    );
};
