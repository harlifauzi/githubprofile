import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Limit, UserInfo } from '../../components';

const User = () => {
    const params = useParams();
    const [userData, setUserData] = useState(null);
    const [rateLimit, setRateLimit] = useState(null);
    const [repoData, setRepoData] = useState(null);


    useEffect(() => {
        getUserData();
        getRateLimit();
        getRepoData();
    },[])


    const getUserData = () => {
        fetch(`https://api.github.com/users/${params.key}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setUserData(json);
            })
            .catch(err => {
                console.log(err);
            })
    }


    const getRateLimit = () => {
        fetch(`https://api.github.com/rate_limit`)
            .then(response => response.json())
            .then(json => {
                // setRateLimit(json.resources.core);
                // if (json.resources.core.remaining < 1) {
                // setError({ active: true, type: 403 });
                // }
                console.log(json.resources.core);
                setRateLimit(json.resources.core);
            });
    }


    const getRepoData = () => {
        fetch(`https://api.github.com/users/${params.key}/repos?per_page=100`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setRepoData(json);
            })
            .catch(error => {
                console.error('Error:', error);
            });
      };


    return (
        <div className="user-container">
            {rateLimit && <Limit data={rateLimit} />}

            {userData && <UserInfo userData={userData} />}
        </div>
    )
}

export default User
