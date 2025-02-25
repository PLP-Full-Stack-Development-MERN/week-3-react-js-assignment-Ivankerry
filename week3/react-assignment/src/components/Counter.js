import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Count: {count}</h2>
            <button 
                onClick={incrementCount} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;