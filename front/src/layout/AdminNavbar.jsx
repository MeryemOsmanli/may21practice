import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
       <Link to="/admin/adminadd">Adminadd</Link>
       <Link to="/admin">Adminhome</Link>
       <Link to="/">Home</Link>


    </div>
  )
}

export default AdminNavbar
