import React from 'react'
import { Link } from 'react-router-dom';
import './adminPage.css';

const AdminPage = () => {
  return (
    <div className='admin-page'>
      {/* <Link to={"/dashboard"}>Dashboard</Link> */}
      <Link to={"/productlist"}>Product List</Link>
      {/* <Link to={"/orderlist"}>Order List</Link> */}
      <Link to={"/userlist"}>User List</Link>
      {/* <Link to={"/suport"}>Suport</Link> */}
    </div>
  )
}

export default AdminPage
