import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/counter/counterSlice';
import Comp3 from './Comp3';

function Comp2() {
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('%cuseEffect Comp2', 'color: #9542f5');
    });

    console.log('render Comp2')
    return (
        <div className="comp">
            <h5>Comp2</h5>
            {/* <span className="counter">{count}</span> */}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <Comp3 />
        </div>
    );
}

export default Comp2;
// export default React.memo(Comp2, (prevProps, nextProps) => true);
