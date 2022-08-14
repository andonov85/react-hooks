import { useState, useEffect } from 'react';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import './styles.css';

function App() {
    useEffect(() => {
        console.log('%cuseEffect App', 'color: #9542f5');
    });

    console.log('render App')
    return (
        <div className="container">
            <Comp1>
                {/* <Comp2/> */}
            </Comp1>
        </div>
    );
}

export default App;
