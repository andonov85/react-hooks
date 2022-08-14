import { useState, useEffect } from 'react';
import Comp4 from './Comp4';

function Comp3() {
    useEffect(() => {
        console.log('%cuseEffect Comp3', 'color: #9542f5');
    });

    console.log('render Comp3')
    return (
        <div className="comp">
            <h5>Comp3</h5>
            <Comp4 />
        </div>
    );
}

export default Comp3;
