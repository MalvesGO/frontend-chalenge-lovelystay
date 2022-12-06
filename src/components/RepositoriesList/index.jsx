import React from 'react'
import { useState, useEffect } from 'react';
import './index.css'

import Loading from '../Loader'

const RepositoriesList = ({ user }) => {

    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)

    // busca os repositorios do utilizador
    async function fetchRepos() {
        const response = await fetch(`https://api.github.com/users/${user.login}/repos?page=${page}&per_page=10`)
        const data = await response.json();
        setRepos(data);        
    }

    function prev() {
        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

    useEffect(() => {
        fetchRepos(page);
        setLoading(false)
    }, [page])

    return (

        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="repos">
                    <ul>
                        {repos.map((repo) => (
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank" rel="noreferrer">
                                    {repo.name} - {repo.description}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <>
                        <div className="controls">
                            <button
                                disabled={page === 1}
                                onClick={() => prev()}
                            >
                                Prev
                            </button>
                            <p>{page}</p>
                            <button
                                disabled={page === Math.ceil(user.public_repos / 10)}
                                onClick={() => next()}>
                                Next
                            </button>
                        </div>
                    </>
                </div>
            )}
        </div>
    )
}

export default RepositoriesList