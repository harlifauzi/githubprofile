import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return (
        <div className="avatar-container">
            <img src={props.src} alt="" />
        </div>
    )
}

export default Avatar
