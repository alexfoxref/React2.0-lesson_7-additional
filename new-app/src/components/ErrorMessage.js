import React from 'react';
import img from '../error.png';

// синтаксис для примера
const ErrorMessage = () => {
    return (
        // фрагмент
        <>
            <img className="errorMessage" src={img} alt="error" width="500" height="500"></img>
        </>
    )
}

export default ErrorMessage;