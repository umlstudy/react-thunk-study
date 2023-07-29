
import { useEffect, useRef, useState } from 'react';

export const UseEffectTestor = () => {
    const [count, setCount] = useState(0);

    const useEffectCallCount = useRef(0);
    
    useEffect(() => {
        useEffectCallCount.current = useEffectCallCount.current + 1;
        console.log(`useEffect called ${useEffectCallCount.current}`);
        return ()=>{
            console.log(`unmounted ${useEffectCallCount.current}`);
        }
    }, [count]);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}