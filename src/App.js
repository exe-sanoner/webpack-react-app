// import React from 'react';   YA NO LO NECESITAMOS!!!

import { useState } from "react";

const App = () => {
    // (
    //     <div className='container'>
    //         <h1>Hello Exe!!</h1>
    //     </div>
    // )

    const [counter, setCounter] = useState(0);
    const [values, setValues] = useState();  // guardamos c/u de los valores

    const handleClick = () => {
        setCounter(counter + 1);
        setValues(values.concat(counter)); // array c/todos los valores del contador
    }

    return (
        <div className='container'>
            <h1>Hello Exe!!</h1>
            <button onClick={handleClick}>Press this!</button>
            <div>
                <strong>{counter}</strong>
            </div>
        </div>
    )
}

export default App;