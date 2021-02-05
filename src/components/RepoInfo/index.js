import React, { useEffect, useState } from 'react';
import { Gap, Repo } from '..';
import './RepoInfo.css';

const RepoInfo = (props) => {
    const [repos, setRepos] = useState([]);


    useEffect(() => {
        setRepos(props.repoData);
    },[])


    return (
        <div className="repoinfo-container">
            <p className="repoinfo-title">Repos</p>
            {repos.length > 0 ? (
                <div>
                    {repos.map((repo, index) => (
                        <div key={index}>
                            <Repo repo={repo} />
                            <Gap height={10} />
                        </div>
                    ))}
                </div>
            ) : (<p>repos not available</p>)}
        </div>
    )
}

export default RepoInfo
