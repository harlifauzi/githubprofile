import React from 'react';
import './Limit.css';

const Limit = (props) => {
    return (
        <div className="limit-container">
            <p className="limit-limit">{props.data.limit} / {props.data.remaining}</p>
            <p className="limit-label">request left</p>
        </div>
    )
}

export default Limit
