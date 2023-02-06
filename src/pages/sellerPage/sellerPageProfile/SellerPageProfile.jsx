import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../actions/productAction';
import { detailsUser } from '../../../actions/userActions';
import LoadingBox from '../../../components/LoadingBox';
import MessageBox from '../../../components/MessageBox';
import Rating from '../../../components/Rating';
import Product from '../../../components/Product/Product';

export default function SellerScreen(props) {
  const params = useParams();
  const { id: sellerId } = params;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const productsList = useSelector((state) => state.productsList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = productsList;

  const dispatch = useDispatch();
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
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
