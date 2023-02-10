import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { useParams } from 'react-router-dom';
import { detailsProduct } from '../../features/actions/productAction';
import NavBottom from '../../components/NavBottom/NavBottom';
import ProductPageImages from '../../components/ProductDetails/ProductPageImages/ProductPageImages';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

import "./ProductPage.scss"

function ProductPage(props:any) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  // const handleClickSpecifications = () => {
  //   document.getElementById('3').scrollIntoView({ behavior: 'smooth' });
  //   setActive(3);
  // };

  // const handleClickDescription = () => {
  //   document.getElementById('0').scrollIntoView({ behavior: 'smooth' });
  //   setActive(0);
  //   console.log('descriere')
  // };

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);
  const detailedProduct = useAppSelector((state) => state.detailedProduct);
  const { loading, error, product }:any = detailedProduct;
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <div className="product-page">
          {/* <ProductHiddenNav
            product={product}
            handleClickSpecifications={handleClickSpecifications}
            handleClickDescription={handleClickDescription}
          /> */}
          <ProductPageImages product={product} />
          <ProductDetails
            product={product}
            active={active}
            setActive={setActive}
            ref={ref}
          />
        </div>
      )}
      <NavBottom />

    </>
  );
}

export default ProductPage
