import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ServiceNav = () => {
  return (
    <>
    <ul className="navbar nav">
    <li className="nav-item">
      <Link className="nav-link" to="old">Old</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="new">Featured</Link>
    </li>
  </ul>
    <Outlet />
  </>
  )
}

export default ServiceNav