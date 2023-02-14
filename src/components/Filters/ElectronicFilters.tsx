import React from "react"
import { BiChevronDown } from "react-icons/bi"
import { Link } from "react-router-dom"
import {
  brandAppliancesArray,
  brandTvArray,
  conditionArray,
  sizeDiagonalArray,
  rezolutionArray,
  storageTypeArray,
  videoTypeArray,
  memoryRArray,
  laptopBrandArray,
  xboxArray,
  playstationArray,
  nintendoArray,
  compatibilityArray,
  laptopProcesorBrandArray,
} from "../../utils"

function ElectronicFilters(props: any) {
  const {
    getFilterUrl,
    brand,
    rezolution,
    condition,
    category,
    subCategoryElectronicFinal,
    subCategory,
    addUpperSpace,
    memoryR,
    videoType,
    storageType,
    processorBrand,
    addUpperFirst,
    size,
    model,
    whichFor,
  } = props
  return (
    <>
      {(category === "TV" ||
        category === "phones" ||
        category === "appliances" ||
        category === "audioHiFi" ||
        category === "gaming" ||
        category === "tabletsAndReaders" ||
        category === "videoProiection" ||
        category === "webAndServers" ||
        category === "phonesTabletsParts" ||
        category === "phonesTabletsAccesories" ||
        category === "laptopPcGaming") && (
        <>
          <section className="subCategory">
            <label className="mb-1">Sub Category</label>
            {/* Below there was controlid="subCategory" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(subCategory)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {subCategoryElectronicFinal.map((c: any, index: any) => (
                  <Link
                    to={getFilterUrl({
                      subCategory: c,
                      model: "all",
                    })}
                    key={index}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(c)}
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
      {category === "appliances" && (
        <section className="brand">
          <label className="mb-1">Brand</label>
          {/* Below there was controlid="brand" */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(brand)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {brandAppliancesArray.map((b, index) => (
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
      {subCategory === "Xbox" && (
        <section className="model">
          <label className="mb-1">Model</label>
          {/* Below there was controlid='model' */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(model)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {xboxArray.map((b, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ model: b })}
                  style={{ textDecoration: "none" }}
                >
                  {addUpperSpace(b)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {subCategory === "Playstation" && (
        <section className="model">
          <label className="mb-1">Model</label>
          {/* Below there was controlid='model' */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(model)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {playstationArray.map((b, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ model: b })}
                  style={{ textDecoration: "none" }}
                >
                  {addUpperSpace(b)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {subCategory === "NintendoWii" && (
        <section className="model">
          <label className="mb-1">Model</label>
          {/* Below there was controlid="model" */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(model)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {nintendoArray.map((b, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ model: b })}
                  style={{ textDecoration: "none" }}
                >
                  {addUpperSpace(b)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {subCategory === "consoleAccesories" && (
        <section className="whichFor">
          <label className="mb-1">Compatibility</label>
          {/* Below there was controlid="whichFor" */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperFirst(whichFor)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {compatibilityArray.map((b, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ whichFor: b })}
                  style={{ textDecoration: "none" }}
                >
                  {addUpperFirst(b)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {subCategory === "laptop" && (
        <>
          <section className="brand">
            <label className="mb-1">Brand</label>
            {/* Below there was controlid="brand" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(brand)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {laptopBrandArray.map((b, index) => (
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
          <section className="diagonal">
            <label className="mb-1">Diagonal</label>
            {/* Below there was controlid="diagonal" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(size)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {sizeDiagonalArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ size: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="memoryR">
            <label className="mb-1">Memory Ram</label>
            {/* Below there was controlid="memoryR" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperFirst(memoryR)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {memoryRArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ memoryR: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperFirst(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="videoType">
            <label className="mb-1">Video Type</label>
            {/* Below there was controlid="videoType" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(videoType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {videoTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ videoType: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="processorBrand">
            <label className="mb-1">Processor Brand</label>
            {/* Below there was controlid="processorBrand" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperFirst(processorBrand)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {laptopProcesorBrandArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ processorBrand: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperFirst(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="storageType">
            <label className="mb-1">Storage Type</label>
            {/* Below there was controlid="storageType" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperFirst(storageType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {storageTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ storageType: b })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperFirst(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {subCategory === "TV" && (
        <>
          <section className="brand">
            <label className="mb-1">Brand</label>
            {/* Below there was  controlid="brand" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(brand)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {brandTvArray.map((b, index) => (
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
          <section className="rez">
            <label className="mb-1">Rezolution</label>
            {/* Below there was controlid="rez" */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperSpace(rezolution)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {rezolutionArray.map((r, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ rez: r })}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(r)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default ElectronicFilters
