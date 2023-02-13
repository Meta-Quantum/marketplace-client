import { Link } from "react-router-dom"
import React from "react"

function AdminPage() {
  return (
    <div className="admin-page">
      <Link to={"admin/dashboard"}>Dashboard</Link>
      <Link to={"admin/product-list"}>Product List</Link>
      <Link to={"admin/order-list"}>Order List</Link>
      <Link to={"admin/user-list"}>User List</Link>
      <Link to={"admin/support"}>Suport</Link>
    </div>
  )
}

export default AdminPage
