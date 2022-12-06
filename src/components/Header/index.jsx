import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import Logo from '../../assets/github.png'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img src={Logo} alt="logo github" />
      </Link>
    </div>
  )
}

export default Header