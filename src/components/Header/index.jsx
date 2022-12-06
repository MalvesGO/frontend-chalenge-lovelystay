import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineGithub} from "react-icons/ai";
import './index.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <AiOutlineGithub fontSize={100} color="white" />
      </Link>
    </div>
  )
}

export default Header