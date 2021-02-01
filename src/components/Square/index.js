import React from 'react';
import './Square.css';

const Square = (props) => {
    return (
        <div className="square-container">
            <p className="count">{props.count}</p>
            <p className="label">{props.label}</p>
        </div>
    )
}

export default Square
