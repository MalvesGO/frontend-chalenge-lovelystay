import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'

const SearchUser = () => {

    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [message, setMessage] = useState("")
    const [user, setUser] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${name}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setMessage('User not found on Github, try again...');
                    setUser(null);
                } else {
                    setUser(data);
                    navigate(`/user/${data.login}`, { state: { user: data } });
                }
            })
    }

    return (
        <>
            <div className='search-form-container'>
                <div className="search-form">
                    <p>Github Search User</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='find a user...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button type="submit">Procurar</button>
                    </form>
                </div>
                {message && <p className="message">{message}</p>}
            </div>
        </>
    )
}

export default SearchUser