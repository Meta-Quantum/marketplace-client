import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../features/hooks';
import { getProducts } from '../../../features/actions/productAction';
import { detailsUser } from '../../../features/actions/userActions';
import LoadingBox from '../../../components/LoadingBox';
import MessageBox from '../../../components/MessageBox';
import Rating from '../../../components/Rating';
import Product from '../../../components/Product/Product';

import "./ProfileSeller.scss"

function ProfileSellerPage(props:any) {
  const params = useParams();
  const { id: sellerId } = params;

  const userDetails = useAppSelector((state) => state.userDetails);
  const { loading, error, user }:any = userDetails;

  const productsList = useAppSelector((state) => state.productsList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products
  }:any = productsList;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(getProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);
  return (
    <div>
      <h1>heeee</h1>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <ul className="card card-body">
            <li>
              <div className="row start">
                {/* <div className="p-1">
                  <img
                    className="small"
                    src={user.seller.logo}
                    alt={user.seller.name}
                  ></img>
                </div> */}
                <div className="p-1">
                  <h1>{user.seller.name}</h1>
                </div>
              </div>
            </li>
            <li>
              <Rating
                rating={user.seller.rating}
                numReviews={user.seller.numReviews}
              ></Rating>
            </li>
            <li>
              <a href={`mailto:${user.email}`}>Contact Seller</a>
            </li>
            <li>{user.seller.description}</li>
          </ul>
        )}
      </div>
      <div className="col-3">
        {loadingProducts ? (
          <LoadingBox></LoadingBox>
        ) : errorProducts ? (
          <MessageBox variant="danger">{errorProducts}</MessageBox>
        ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="row center">
              {products.map((product:any) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileSellerPage
