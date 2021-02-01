import React, { useState } from 'react';
import { Input } from '../../components';
import './Search.css';
import GhPolyglot from 'gh-polyglot';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory();
    const [input, setInput] = useState("");


    const getLangData = () => {
        const me = new GhPolyglot(`${input}`);
        me.userStats((err, stats) => {
            if (err) {
                console.error('Error:', err);
            } else {
                console.log(stats);
            }
        });
      };


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
