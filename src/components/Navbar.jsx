import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = () => {

    
    console.log(useContext(UserContext))

  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container p-3'>
            <NavLink to='/' className= 'btn btn-outline-primary'>Home</NavLink>
            <NavLink to='/dashboard' className= 'btn btn-outline-warning'>Dashboard</NavLink>
        </div>
    </nav>
  )
}

export default Navbar