import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Comp5 from './Comp5';

function Comp4() {
    const count = useSelector((state) => state.counter.value);

    useEffect(() => {
        console.log('%cuseEffect Comp4', 'color: #9542f5');
    });

    console.log('render Comp4')
    return (
        <div className="comp">
            <h5>Comp4</h5>
            <span className="counter">{count}</span>
            <Comp5 />
        </div>
    );
}

export default Comp4;
