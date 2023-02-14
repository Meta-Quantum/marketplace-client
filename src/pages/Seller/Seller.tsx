import React from 'react';
import { Link } from 'react-router-dom';
import "./Seller.scss"

function SellerPage() {
  return (
    <div className="seller-page">
      <Link to={'/productlist/seller'}>Product List</Link>
      <Link to={'/orderlist/seller'}>Order List</Link>
      <Link to={'/profile'}>Form Seller</Link>
    </div>
  );}

export default SellerPage
