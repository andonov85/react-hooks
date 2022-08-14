import { useState, useEffect } from 'react';

function Comp5() {
    useEffect(() => {
        console.log('%cuseEffect Comp5', 'color: #9542f5');
    });

    console.log('render Comp5')
    return (
        <div className="comp">
            <h5>Comp5</h5>
        </div>
    );
}

export default Comp5;
