import React, { useState } from "react";
import './style.css'

const Count = () => {
    const [counter, setCounter] = useState(0);

    const handleClick1 = () => {
        setCounter(counter + 1);
    };

    const handleClick2 = () => {
        setCounter(counter - 1);
    };

    return (
         <section class="section">
        <div class="card" >
            <h1 class="head">Counter App</h1>
            <div class="card-heading" >
                {counter}
            </div>
            <div className="buttons">
                <button class="btn"  onClick={handleClick1}> Increment </button>
                <button class="btn2" onClick={handleClick2}>Decrement </button>
            </div>
        </div>
        </section>
    );
};

export default Count;