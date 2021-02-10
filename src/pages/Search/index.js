import React, { useState } from 'react';
import { Input } from '../../components';
import './Search.css';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory();
    const [input, setInput] = useState("");
    const [notFound, setNotFound] = useState(null);


    const getUserData = () => {
        fetch(`https://api.github.com/users/${input}`)
            .then(res => {
                if(res.status === 404 || res.status === 403){
                    setNotFound(true);
                    return;
                } else {
                    history.push(`/user/${input}`);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        getUserData();
    }


    const onChange = (e) => {
        setNotFound(false);
        setInput(e.target.value);
    }
    

    return (
        <div className="search-container">
            <i className='bx bxl-github'></i>
            <p>Find Your OctoProfile</p>

            <Input 
                value={input} 
                onChange={(e) => onChange(e)}
                onSubmit={onSubmit}
            />
            
            { notFound && <p className="search-notfound">Profile not found!</p> }
        </div>
    )
}

export default Search
