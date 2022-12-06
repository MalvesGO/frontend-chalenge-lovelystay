import React from 'react'

import Logo from '../../assets/github.png';
import './index.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <img src={Logo} className="logo-loading" alt="loading" />
                <div className="loading-bar"></div>
            </div>
        </div>
    )
}

export default Loading