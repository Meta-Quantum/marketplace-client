import React, { useEffect, useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../actions/productAction';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';

import dolar from '../../data/dollar.png';
import euro from '../../data/euro.png';
import bitcoin from '../../data/bitcoin.png';
import ethereum from '../../data/ethereum.png';
import ProductSpecifications from '../Product Details/ProductSpecifications';
import './product.css';

const deleteToast = () => toast.success('Successfully deleted!');

const Product = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const { product, setPromoteProduct } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    if (deleteItem === true) {
      deleteToast();
      dispatch(deleteProduct(product._id));
      setDeleteItem(false);
    }
  }, [deleteItem, dispatch, navigate, product._id, setPromoteProduct, product]);

  const handleClose = () => {
    setShowDelete(false);
  };

  const deleteHandler = () => {
    setShowDelete(true);
  };
  return (
    <div className="product">
      <Link to={`/${product._id}`}>
        <div className="product-image">
          {product.images[0] !== undefined && (
            <img src={product.images[0].url} alt="" className="product-image" />
          )}
        </div>
      </Link>
      <strong>Name:</strong> {product.name}
      <br></br>
      <strong>Price:</strong> {product.price} <strong>€</strong>
      <br></br>
      <strong>Description:</strong> {product.description}
      <br></br>
      <BiTrash onClick={() => deleteHandler(product)} />
      <i
        className="fas fa-pen"
        onClick={() =>
          navigate(`/${product._id}/editProduct/${product.mainCategory}`)
        }
      ></i>
      <Button variant="secondary" onClick={() => setShow(true)}>
        see details
      </Button>
      <Button variant="warning">
        Add to cart
      </Button>
      {/* <button className="popular-category-button" onClick={(e) => setPromoteProduct(current => [...current, product])}>
        Promote
      </button> */}
      <div className="modal-dark-light">
        <Modal show={show} onHide={() => setShow(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title style={{ color: 'black' }}>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: 'black' }}>
            <Carousel variant="dark">
              {product.images.map((img, index) => (
                <Carousel.Item className="slide-show-image">
                  <img
                    className="ad-image"
                    src={img.url}
                    alt={img}
                    key={index}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="prices">
              <h3>
                <img src={dolar} alt="" /> {product.price * 1.05}
              </h3>
              <h3>
                <img src={euro} alt="" /> {product.price}
              </h3>
              <h3>
                <img src={bitcoin} alt="" /> {product.price * 0.000062}
              </h3>
              <h3>
                <img src={ethereum} alt="" /> {product.price * 0.00083}
              </h3>
            </div>
            <strong>Description:</strong> {product.description}
            <br></br>
            <ProductSpecifications product={product} />
          </Modal.Body>
        </Modal>
      </div>
      <Modal
        show={showDelete}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        variant="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setDeleteItem(true)}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Product;
