import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(5);

const incrementCount = () => {
    setCount(count + 1);
};

return (
    <div className="counter">
    <h1>{count}</h1>
<button onClick={incrementCount}>+1</button>
    </div>
);
}

export default Counter;
