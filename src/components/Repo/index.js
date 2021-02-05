import React from 'react';
import { Gap } from '..';
import './Repo.css';
import { LangColors } from '../../utils';

const Repo = (props) => {
    return (
        <div className="repo-container">
            <p className="repo-title"><i className='bx bx-code-block'></i>{props.repo.name}</p>
            <p className="repo-desc">{props.repo.description}</p>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '50px'}}>
                <div style={{display: 'flex'}}>
                    <div style={{
                        marginRight: '5px',
                        height: '17px',
                        width: '17px',
                        borderRadius: '50%',
                        backgroundColor: LangColors[props.repo.language]
                    }}>
                    </div>
                    <p className="repo-lang">{props.repo.language}</p>
                    <Gap width={15} />
                    <div style={{display: 'flex'}}>
                        <i className='bx bxs-star' style={{fontSize: '17px', color: '#6A737D'}}></i>
                        <p className="repo-stars">{props.repo.stargazers_count}</p>
                    </div>
                    <Gap width={15} />
                    <div style={{display: 'flex'}}>
                        <i className='bx bx-git-repo-forked' style={{fontSize: '17px', color: '#6A737D'}}></i>
                        <p className="repo-forks">{props.repo.forks_count}</p>
                    </div>
                </div>
                <p className="repo-size">{props.repo.size} KB</p>
            </div>
        </div>
    )
}

export default Repo
