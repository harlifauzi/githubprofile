import React from 'react';
import './UserInfo.css';
import { Avatar, Square } from '..';

const UserInfo = (props) => {
    const viewProfile = (link) => {
        window.open(`${link}`);
    };

    return (
        <div className="userinfo-container">
            <Avatar src={props.userData.avatar_url} />
            <h3 onClick={() => viewProfile(props.userData.html_url)} className="name">@{props.userData.login}</h3>
            <h3 className="join">
                <i className='bx bx-calendar'></i>Joined{' '}
                {new Date(props.userData.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                })}
            </h3>
            <div className="squares">
                <Square label="repositories" count={props.userData.public_repos}/>
                <Square label="followers" count={props.userData.followers}/>
                <Square label="following" count={props.userData.following}/>
            </div>
        </div>
    )
}

export default UserInfo
