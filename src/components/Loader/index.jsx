import React from 'react'

import { AiOutlineGithub } from "react-icons/ai";
import './index.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <AiOutlineGithub fontSize={100} color="white" />
                <div className="loading-bar"></div>
            </div>
        </div>
    )
}

export default Loading