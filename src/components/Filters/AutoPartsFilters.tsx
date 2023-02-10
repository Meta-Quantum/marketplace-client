import React from "react"
import { BiChevronDown } from "react-icons/bi"
import { Link } from "react-router-dom"
import {
  tireSizeArray,
  tireWidthArray,
  tireProfileArray,
  tireSeasonArray,
  rimTypeArray,
  rimSizeArray,
  autoBrandsArray,
  chargeTypeArray,
  productTypeArray,
  mountTypeArray,
  conditionArray,
  useArray,
} from "../../utils"

function AutoPartsFilters(props: any) {
  const {
    getFilterUrl,
    subCategory,
    category,
    season,
    tireSize,
    tireWidth,
    tireProfile,
    rimType,
    rimSize,
    subCategoryAutoPartsFinal,
    brand,
    addUpperSpace,
    productType,
    chargeType,
    mountType,
    condition,
    whichFor,
  } = props
  return (
    <>
      {category === "wheelsRimsTires" && (
        <>
          <section className="subCategory">
            <label className="mb-1">Sub Category</label>
            {/* Below there is contorlid='subCategory' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(subCategory)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {subCategoryAutoPartsFinal.map((b: any, index: any) => (
                  <Link
                    key={index}
                    to={getFilterUrl({
                      subCategory: b,
                      brand: "all",
                      condition: "all",
                    })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="condition">
            <label className="mb-1">Condition</label>
            {/* Below there is controlid='condition' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(condition)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {conditionArray.map((s, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ condition: s })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(s)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {category === "electricStations" && (
        <>
          <section className="mountType">
            <label className="mb-1">Mount Type</label>
            {/* Below there was controlid='mountType' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(mountType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {mountTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ mountType: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="productType">
            <label className="mb-1">Product Type</label>
            {/* Below there was contorlid='productType' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(productType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {productTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ productType: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="chargeType">
            <label className="mb-1">Charging Type</label>
            {/* Below tehere was controlid='chargeType' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(chargeType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {chargeTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ chargeType: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="use">
            <label className="mb-1">Use</label>
            {/* Below there was controlid='use' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(whichFor)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {useArray.map((s, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ whichFor: s })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(s)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="condition">
            <label className="mb-1">Condition</label>
            {/* Below there was controlid='condition' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(condition)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {conditionArray.map((s, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ condition: s })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(s)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {subCategory === "tires" && (
        <>
          <section className="season">
            <label className="mb-1">Season</label>
            {/* Below there was controlid='season' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(season)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {tireSeasonArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ season: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="tireSize">
            <label className="mb-1">Tire Size</label>
            {/* Below there was controlid='tireSize' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(tireSize)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {tireSizeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ tireSize: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="tireWidth">
            <label className="mb-1">Tire Width</label>
            {/* Below there was controlid="tireWidth" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(tireWidth)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {tireWidthArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ tireWidth: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="tireProfile">
            <label className="mb-1">Tire Profile</label>
            {/* Below there was controlid='tireProfile' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(tireProfile)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {tireProfileArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ tireProfile: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {subCategory === "wheelsAndRims" && (
        <>
          <section className="rimType">
            <label className="mb-1">Rim Type</label>
            {/* Below there was controlid='rimType' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(rimType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {rimTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ rimType: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="rimSize">
            <label className="mb-1">Rim Size</label>
            {/* Below there was controlid="rimSize"  */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(rimSize)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {rimSizeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ rimSize: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {b}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {(subCategory === "wheelsAndRims" ||
        subCategory === "tires" ||
        subCategory === "accesories") && (
        <section className="brand">
          <label className="mb-1">Brand</label>
          {/* Below there was controlid="brand"  */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(brand)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {autoBrandsArray.map((b, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ brand: b })}
                  style={{ textDecoration: "none" }}
                >
                  {addUpperSpace(b)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AutoPartsFilters
