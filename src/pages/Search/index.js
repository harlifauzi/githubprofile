import React, { useState } from 'react';
import { Input } from '../../components';
import './Search.css';
import GhPolyglot from 'gh-polyglot';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory();
    const [input, setInput] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        // fetch(`https://api.github.com/users/${input}`)
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // getLangData();
        history.push(`/user/${input}`);
    }
    

    return (
        <div className="search-container">
            <i className='bx bxl-github'></i>
            <p>Find Your OctoProfile</p>
            <Input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Search
