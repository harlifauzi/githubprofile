import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LangChart, Limit, RepoInfo, UserInfo } from '../../components';
import GhPolyglot from 'gh-polyglot';

const User = () => {
    const params = useParams();
    const [userData, setUserData] = useState(null);
    const [rateLimit, setRateLimit] = useState(null);
    const [repoData, setRepoData] = useState(null);
    const [langData, setLangData] = useState(null);


    useEffect(() => {
        getUserData();
        getRateLimit();
        getRepoData();
        getLangData();
    },[])


    const getUserData = () => {
        fetch(`https://api.github.com/users/${params.key}`)
            .then(res => res.json())
            .then(json => {
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
                setRateLimit(json.resources.core);
            });
    }


    const getRepoData = () => {
        fetch(`https://api.github.com/users/${params.key}/repos`)
            .then(response => response.json())
            .then(json => {
                setRepoData(json);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const getLangData = () => {
        const me = new GhPolyglot(`${params.key}`);
        me.userStats((err, stats) => {
            if (err) {
                console.error('Error:', err);
            } else {
                setLangData(stats);
            }
        });
    };


    return (
        <div className="user-container">
            {rateLimit && <Limit data={rateLimit} />}

            {userData && <UserInfo userData={userData} />}

            {langData && <LangChart langData={langData} repoData={repoData} />}

            {repoData && <RepoInfo repoData={repoData}/>}

        </div>
    )
}

export default User;