import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import './index.css'

import Header from '../../components/Header';
import UserDetails from '../../components/UserDetails';
import RepositoriesList from '../../components/RepositoriesList'

const User = () => {

  const location = useLocation();
  const user = location.state.user;

  return (
    <>
      <Header />
      <UserDetails user={user} />
      <RepositoriesList user={user} />
    </>
  )
}

export default User