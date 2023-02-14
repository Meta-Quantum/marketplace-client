import React from "react"
import "./TopCategories.scss"
import laptop from "../../assets/mainCategories/laptop.png"
import kitchen from "../../assets/mainCategories/kitchen.png"
import whatch from "../../assets/mainCategories/whatch.png"
import beauty from "../../assets/mainCategories/beauty.png"
import technologyToy from "../../assets/mainCategories/technologyToy.png"
import electronic from "../../assets/mainCategories/electronic.png"
import fashion from "../../assets/mainCategories/fashion.png"
import phone from "../../assets/mainCategories/phone.png"
import { Link } from "react-router-dom"

function TopCategories() {
  return (
    <div className="top-categories">
      <label>
        Top Categories
        <div className="categories">
          <div className="category-home electronics-margin">
            <Link
              to={"/filters/mainCategory/electronicsAppliances/category/TV/subCategory/TV"}
              style={{ color: "grey" }}
            >
              <img src={electronic} alt="" /> <div>Electronics</div>
            </Link>
          </div>
          <div className="category-home">
            <Link to={"/filters/mainCategory/fashion"} style={{ color: "grey" }}>
              <img src={fashion} alt="" /> <div>Clothing</div>
            </Link>
          </div>
          <div className="category-home laptop-margin">
            <Link
              to={
                "/filters/mainCategory/electronicsAppliances/category/laptopPcGaming/subCategory/laptop"
              }
              style={{ color: "grey" }}
            >
              <img src={laptop} alt="" /> <div>Laptops</div>
            </Link>
          </div>
          <div className="category-home">
            <Link
              to={
                "/filters/mainCategory/houseAndGarden/category/furnitureDecorations/subCategory/kitchen"
              }
              style={{ color: "grey" }}
            >
              <img src={kitchen} alt="" /> <div>Home & Kitchen</div>
            </Link>
          </div>
          <div className="category-home beauty-margin">
            <Link
              to={"/filters/mainCategory/servicesCompanyEquipment/category/beautyServices"}
              style={{ color: "grey" }}
            >
              <img src={beauty} alt="" /> <div>Beauty & Health</div>
            </Link>
          </div>
          <div className="category-home">
            <Link to={"/filters/mainCategory/fashion/category/watches"} style={{ color: "grey" }}>
              <img src={whatch} alt="" /> <div>Whatches</div>
            </Link>
          </div>
          <div className="category-home toys-margin">
            <Link to={"/filters/mainCategory/electronicsAppliances"} style={{ color: "grey" }}>
              <img src={technologyToy} alt="" /> <div>Technology Toys</div>
            </Link>
          </div>
          <div className="category-home">
            <Link
              to={"/filters/mainCategory/electronicsAppliances/category/phones"}
              style={{ color: "grey" }}
            >
              <img src={phone} alt="" /> <div>Phones</div>
            </Link>
          </div>
        </div>
      </label>
    </div>
  )
}

export default TopCategories
