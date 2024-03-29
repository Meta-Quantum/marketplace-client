
import "./ProductDetails.scss"
import React,  { useState } from "react"
import { Button } from "react-bootstrap"
import { AiOutlineShop } from "react-icons/ai"
import {
  BsBoxSeam,
  BsCardHeading,
  BsFacebook,
  BsFileBarGraph,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
import { FaGooglePlus } from "react-icons/fa"
import { RiBillLine } from "react-icons/ri"
import { TfiWorld } from "react-icons/tfi"
import { Link } from "react-router-dom"
import Rating from "../Rating"
import Review from "../Review"
import ProductSpecification from "./ProductSpecification"
import dolar from "../../assets/dollar.png"
import euro from "../../assets/euro.png"
import bitcoin from "../../assets/bitcoin.png"
import ethereum from "../../assets/ethereum.png"
import ad from "../../assets/banner.png"
import { Content, Tab, Tabs } from "./ProductDetailsTab"
import { addToCart } from "../../features/actions/cartActions"
import { useAppDispatch } from "../../features/hooks"

function ProductDetails(props: any) {
  const { product, active, ref, setActive } = props
  const [quantity, setQuantity] = useState(0)
  const dispatch = useAppDispatch()
  const addUpperSpace = (str: any) => {
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str.replace(/[A-Z]/g, " $&").trim()
  }

  const handleClick = (e: any) => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  return (
    <div className="product-page-details">
      <div className="product-data-details">
        <div className="product-detail">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-brand-rating">
            <div>Brand: Product Brand</div>
            <Rating />
          </div>
          <div className="prices">
            <p className="category-price">
              <img src={dolar} alt="" /> {product.price * 1.05}
            </p>
            <p className="category-price">
              <img src={euro} alt="" /> {product.price}
            </p>
            <p className="category-price">
              <img src={bitcoin} alt="" /> {product.price * 0.000062}
            </p>
            <p className="category-price">
              <img src={ethereum} alt="" /> {product.price * 0.00083}
            </p>
          </div>
          <div className="product-status">
            Status:
            <b className="greenColor">{product.Stock < 1 ? " Out Of Stock" : " In Stock"}</b>
          </div>
          <div className="product-soldBy">
            Sold By:
            {/* <Link to={`/seller/${product.seller._id}`}> // atunci cand se creeaza un produs trebuie sa arate si seller-ul
              {product.seller.seller.name} */}
            Seller Name
            {/* </Link> */}
          </div>
          <div className="product-quantity-buttons">
            <div className="buttons-product-page">
              <div className="quantity">
                <div className="quantity-font">Quantity</div>
                <div className="quantity-buttons">
                  <Button
                    onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
                    variant="light"
                    size="sm"
                  >
                    <i className="fas fa-minus-circle"></i>
                  </Button>{" "}
                  <b>{quantity}</b>{" "}
                  <Button onClick={() => setQuantity(quantity + 1)} variant="light" size="sm">
                    <i className="fas fa-plus-circle"></i>
                  </Button>
                </div>
              </div>
              <div className="cart-buy-buttons">
                <Button
                  variant="dark"
                  size="lg"
                  onClick={() => dispatch(addToCart(product._id, quantity))}
                >
                  Add To Cart
                </Button>
                <Button variant="warning" size="lg">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="logo-favs-compare">
              <CiHeart className="third-logo" />
              <BsFileBarGraph className="third-logo" /> Compare
            </div>
          </div>
          <div className="product-special-details">
            <div>
              <b>SKU:</b> {product._id}{" "}
            </div>
            <div>
              <b>Categories:</b>{" "}
              <Link
                to={`/filters/mainCategory/${product.mainCategory}`}
                style={{ textDecoration: "none", fontWeight: "600" }}
              >
                {addUpperSpace(product.mainCategory)}
              </Link>
            </div>
            <div>
              <b>Tags:</b>{" "}
              {product.subCategory !== undefined && addUpperSpace(product.subCategory) + ", "}
              {addUpperSpace(product.category)}
              {product.model !== undefined && ", " + product.model}
              {product.brand !== undefined && ", " + product.brand}
            </div>
          </div>
          <div className="product-page-companies">
            <BsFacebook className="first-logo" />
            <BsTwitter className="first-logo" />
            <BsLinkedin className="first-logo" />
            <FaGooglePlus className="first-logo" />
            <BsPinterest className="first-logo" />
          </div>
        </div>
        <div className="ad-stuff">
          <div className="condition-stuff">
            <div className="first-condition">
              <TfiWorld className="first-logo" /> Shipping World{" "}
            </div>
            <div className="first-condition">
              <RiBillLine className="second-logo" /> Free 7-day return if eligible, so easy
            </div>
            <div className="first-condition">
              <BsBoxSeam className="second-logo" /> Supplier give bills for this product
            </div>
            <div className="first-condition">
              <BsCardHeading className="second-logo" /> Pay online or when receiving goods
            </div>
          </div>
          <div className="sell-metaQuantum">
            <span>
              <AiOutlineShop className="first-logo"></AiOutlineShop> Sell on MetaQuantum?{" "}
              <Link to={"/login"} style={{ textDecoration: "none", fontWeight: "600" }}>
                <strong>Register Now!</strong>
              </Link>
            </span>
          </div>
          <img className="ad-product-page" src={ad} alt="" />
        </div>
      </div>
      <div className="tabs-detail-product">
        <Tabs>
          {/* Below there was id={0} & active=(active === 0) */}
          <Tab onClick={handleClick}  ref={ref}>
            Description
          </Tab>
          {/* Below there was id={1} & active=(active === 1) */}
          <Tab onClick={handleClick} >
            Specifications
          </Tab>
          {/* Below there was id={2} & active=(active === 2) */}
          <Tab onClick={handleClick} >
            Vendor
          </Tab>
          {/* Below there was id={3} & active={active === 3} */}
          <Tab onClick={handleClick}  ref={ref}>
            Reviews (0)
          </Tab>
          {/* Below there was id={4} & active={active === 4} */}
          <Tab onClick={handleClick} >
            Questions and Answers
          </Tab>
        </Tabs>
        <>
        {/* Below there was active={active===0} */}
          <Content>
            <div className="product-description">
              <div className="tab-title">Description</div>
              <p className="product-description-width">{product.description}</p>
            </div>
          </Content>
          {/* Below there was active=(active === 1) */}
          <Content >
            <div className="spec-tab">
              <div className="tab-title">Specifications</div>
              <ProductSpecification product={product} />
            </div>
          </Content>
          {/* Below there was active={active === 2} */}
          <Content >
            <div className="vendor-tab">
              <div className="tab-title"> Seller name</div>
              <div>
                <p>Seller details</p>
                <b>See more products from the Seller</b>
              </div>
            </div>
          </Content>
          {/* Below there was active={active === 3} */}
          <Content >
            <div className="review-tab">
              <div className="tab-title">Reviews</div>
              <div>
                {" "}
                <Review product={product} />
              </div>
            </div>
          </Content>
          {/* Below there was active={active === 4} */}
          <Content >
            <div className="questions-answers">
              <div className="tab-title">Questions and Answers</div>
              <form>
                <input
                  type="text"
                  placeholder="Have a question? Search for answer"
                  className="question-answer-input"
                />
              </form>
              <p>You are not logged in</p>
            </div>
          </Content>
          <div className="ad-stuff-querry">
            <div className="condition-stuff">
              <div className="first-condition">
                <TfiWorld className="first-logo" /> Shipping World{" "}
              </div>
              <div className="first-condition">
                <RiBillLine className="second-logo" /> Free 7-day return if eligible, so easy
              </div>
              <div className="first-condition">
                <BsBoxSeam className="second-logo" /> Supplier give bills for this product
              </div>
              <div className="first-condition">
                <BsCardHeading className="second-logo" /> Pay online or when receiving goods
              </div>
            </div>
            <div>
              <div className="sell-metaQuantum">
                <span>
                  <AiOutlineShop className="first-logo"></AiOutlineShop> Sell on MetaQuantum?{" "}
                  <Link to={"/login"} style={{ textDecoration: "none", fontWeight: "600" }}>
                    <strong>Register Now!</strong>
                  </Link>
                </span>
              </div>
              <img className="ad-product-page" src={ad} alt="" />
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default ProductDetails
