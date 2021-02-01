import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input 
                value={props.value}
                onChange={props.onChange}
            />
        </form>
    )
}

export default Input
