import { useState, useEffect } from 'react';
import Comp2 from './Comp2';

function Comp1({ children }) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('%cuseEffect Comp1', 'color: #9542f5');
    });

    const handleClick = () => {
        console.log('%c -= click =-', 'color: #bada55');
        setCounter(prevState => prevState + 1);
        // setCounter(0);
    }

    console.log('render Comp1')
    return (
        <div className="comp">
            <h5>Comp1</h5>
            <span className="counter">{counter}</span>
            <button onClick={handleClick}>+</button>
            {/* { children } */}
            <Comp2 />
        </div>
    );
}

export default Comp1;
