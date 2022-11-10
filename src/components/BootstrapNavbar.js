import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const BootstrapNavbar = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handlelogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="#">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/service">Service</NavLink>
          </li>
          <li className="nav-item">
            {!auth.user ? <NavLink className="nav-link" to="/login">Login</NavLink> : <NavLink className="nav-link" to="/" onClick={handlelogout}>Log out</NavLink>}
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default BootstrapNavbar