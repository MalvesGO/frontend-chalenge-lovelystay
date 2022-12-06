import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import GihubLogo from '../../assets/Github.png'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img src={GihubLogo} alt="logo github" />
      </Link>
    </div>
  )
}

export default Header