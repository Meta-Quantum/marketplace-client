import React ,{ useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { Link, useNavigate } from "react-router-dom"
import { createProduct } from "../../../features/actions/productAction"
import { PRODUCT_CREATE_RESET } from "../../../features/constants/productConstants"
import toast from "react-hot-toast"
import {
  brandClothesArray,
  brandShoesArray,
  brandWatchesArray,
  caseColourArray,
  caseMaterialArray,
  colourArray,
  conditionFashionArray,
  displayArray,
  mainCategoryCreate,
  mainCategoryObj,
  materialArray,
  seasonArray,
  sizeClothesArray,
  sizeShoesArray,
  soleTypeArray,
  waterResistanceArray,
  whichForArray,
} from "../../../utils"
import { BiChevronDown } from "react-icons/bi"
import LoadingBox from "../../../components/LoadingBox"
import "../CreateProduct.scss"

const createToastSuccess = () => toast.success("Translation successfully created!")
const createToastFail = () => toast.error("Sorry! Translation unsuccessfully created!")
const createToastMaxLimit = () => toast("Max limit is 10MB on each file!")

function CreateFashion(props: any) {
  
  const [images, setImages] = useState([{}])
  const [imagesPreview, setImagesPreview] = useState([{}])
  const [name, setName] = useState("")
  const [mainCategory, setMainCategory] = useState("fashion")
  const [condition, setCondition] = useState("")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [display, setDisplay] = useState("")
  const [size, setSize] = useState("")
  const [material, setMaterial] = useState("")
  const [soleType, setSoleType] = useState("")
  const [season, setSeason] = useState("")
  const [whichFor, setWhichFor] = useState("")
  const [waterResistance, setWaterResistance] = useState("")
  const [caseColour, setCaseColour] = useState("")
  const [caseMaterial, setCaseMaterial] = useState("")
  const [colour, setColour] = useState("")
  const [brand, setBrand] = useState("")
  const [categoryArray, setCategoryArray] = useState([{}])
  const [subCategoryArray, setSubCategoryArray] = useState([{}])
  const [mainCategorySelect, setMainCategorySelect] = useState("fashion")
  const [categorySelect, setCategorySelect] = useState("Select Category")
  const [subCategorySelect, setSubCategorySelect] = useState("Select Sub Category")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const createdProduct = useAppSelector((state) => state.createdProduct)

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    maxLimit,
  } = createdProduct

  useEffect(() => {
    console.log(props);
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET })
      navigate("/")
      createToastSuccess()
    }
    if (maxLimit) {
      createToastMaxLimit()
    }
    if (errorCreate) {
      createToastFail()
    }
  }, [successCreate, errorCreate, maxLimit, dispatch, navigate])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const myForm = new FormData()

    myForm.set("name", name)
    myForm.set("mainCategory", mainCategory)
    myForm.set("condition", condition)
    myForm.set("category", category)
    myForm.set("subCategory", subCategory)
    myForm.set("description", description)
    myForm.set("price", price)
    myForm.set("display", display)
    myForm.set("size", size)
    myForm.set("material", material)
    myForm.set("soleType", soleType)
    myForm.set("season", season)
    myForm.set("whichFor", whichFor)
    myForm.set("waterResistance", waterResistance)
    myForm.set("caseColour", caseColour)
    myForm.set("caseMaterial", caseMaterial)
    myForm.set("colour", colour)
    myForm.set("brand", brand)

    images.forEach((image: any) => {
      myForm.append("images", image)
    })
    dispatch(createProduct(myForm))
  }

  const createProductImagesChange = (e: any) => {
    const files = Array.from(e.target.files)

    setImages([])
    setImagesPreview([])

    files.forEach((file: any) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old: any) => [...old, reader.result])
          setImages((old: any) => [...old, reader.result])
        }
      }

      reader.readAsDataURL(file)
    })
  }

  // const addUpperFirst = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };
  const addUpperSpace = (str: string) => {
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str.replace(/[A-Z]/g, " $&").trim()
  }
  useEffect(() => {
    Object.entries(mainCategoryObj).map((item, index) => {
      console.log(index);
      if (item[0] === mainCategorySelect) {
        setCategoryArray(Object.getOwnPropertyNames(item[1]))
      }
      return null
    })

    Object.entries(mainCategoryObj.fashion).map((item) => {
      if (item[0] === categorySelect) {
        setSubCategoryArray(Object.getOwnPropertyNames(item[1]))
      }
      return null
    })
  }, [mainCategorySelect, categorySelect, subCategorySelect])

  return (
    <div className="form-container">
      <Helmet>
        <title>Create Product</title>
      </Helmet>
      <h1 className="title">Create Product</h1>
      <Form onSubmit={handleSubmit} className="form-container" encType="multipart/form-data">
        <div className="create-form-categories">
          <section className="mainCategoryCreate">
            <label className="mb-1">Main Category</label>
            {/* Below there was controlid='mainCategory' */}
            <div className="dropdown">
              <button className="dropbtn" type="button">
                {addUpperSpace(mainCategorySelect)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {mainCategoryCreate.map((mc, index) => (
                  <Link
                    to={`/createProduct/${mc}`}
                    onClick={() => {
                      setMainCategorySelect(mc)
                      setCategorySelect("Select Category")
                      setSubCategorySelect("Select Sub Category")
                      setMainCategory(mc)
                    }}
                    key={index}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(mc)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="mainCategoryCreate">
            <label className="mb-1">Category</label>
            {/* Below there was controlid='mainCategory' */}
            <div className="dropdown">
              <button className="dropbtn" type="button">
                {addUpperSpace(categorySelect)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {categoryArray.map((c: any, index) => (
                  <Link
                    to={"/createProduct/fashion"}
                    onClick={() => {
                      setCategorySelect(c)
                      setSubCategorySelect("Select Sub Category")
                      setCategory(c)
                    }}
                    key={index}
                    style={{ textDecoration: "none" }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          {(categorySelect === "womanClothes" ||
            categorySelect === "manClothes" ||
            categorySelect === "womanShoes" ||
            categorySelect === "manShoes" ||
            categorySelect === "wedding") && (
            <>
              <section className="mainCategoryCreate">
                <label className="mb-1">Sub Category</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {addUpperSpace(subCategorySelect)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {subCategoryArray.map((sc: any, index) => (
                      <Link
                        to={"/createProduct/fashion"}
                        onClick={() => {
                          setSubCategorySelect(sc)
                          setSubCategory(sc)
                        }}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        {addUpperSpace(sc)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
        {/* Below there was controlid='name' */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoComplete="off"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        {/* Below there was controlid='price' */}
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        {/* Below there was controlid='description' */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={createProductImagesChange}
          multiple
        />
        <div className="createProductFormImage">
          {imagesPreview.map((image: any, index) => (
            <img key={index} src={image} alt="Product Preview" />
          ))}
        </div>

        {/* ----------------------------------------------------------------------------------------fashion */}
        {mainCategorySelect === "fashion" && (
          <div className="fashion-create-selectors">
            <section className="mainCategoryCreate">
              <label className="mb-1">Condition</label>
              {/* Below there was controlid='mainCategory' */}
              <div className="dropdown">
                <button className="dropbtn" type="button">
                  {condition === "" ? "Select Condition" : addUpperSpace(condition)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {conditionFashionArray.map((c, index) => (
                    <Link
                      to={"/createProduct/fashion"}
                      onClick={() => {
                        setCondition(c)
                      }}
                      key={index}
                      style={{ textDecoration: "none" }}
                    >
                      {addUpperSpace(c)}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {(categorySelect === "womanShoes" || categorySelect === "manShoes") && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Material</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {material === "" ? "Select Material" : addUpperSpace(material)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {materialArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setMaterial(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Size</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {size === "" ? "Select Size" : addUpperSpace(size)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {sizeShoesArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setSize(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Brand</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {brand === "" ? "Select Brand" : addUpperSpace(brand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {brandShoesArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setBrand(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Season</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {season === "" ? "Select Season" : addUpperSpace(season)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {seasonArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setSeason(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {(categorySelect === "womanClothes" || categorySelect === "manClothes") && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Size</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {size === "" ? "Select Size" : addUpperSpace(size)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {sizeClothesArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setSize(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Colour</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {colour === "" ? "Select Colour" : addUpperSpace(colour)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {colourArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setColour(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
            {(categorySelect === "womanClothes" || categorySelect === "manClothes") && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Brand</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {brand === "" ? "Select Brand" : addUpperSpace(brand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {brandClothesArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setBrand(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
            {categorySelect === "womanShoes" && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Sole Type</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {soleType === "" ? "Select Sole Type" : addUpperSpace(soleType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {soleTypeArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setSoleType(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
            {categorySelect === "wedding" && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Which For</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {whichFor === "" ? "Select Which For" : addUpperSpace(whichFor)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {whichForArray.map((c, index) => (
                      <Link
                        to={"/createProduct/fashion"}
                        onClick={() => {
                          setWhichFor(c)
                        }}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        {addUpperSpace(c)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {categorySelect === "watches" && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Display</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {display === "" ? "Select Display" : addUpperSpace(display)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {displayArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setDisplay(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Brand</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {brand === "" ? "Select Brand" : addUpperSpace(brand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {brandWatchesArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setBrand(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Water Resistance</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {waterResistance === ""
                        ? "Select Water Resistance"
                        : addUpperSpace(waterResistance)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {waterResistanceArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setWaterResistance(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Case Colour</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {caseColour === "" ? "Select Case Colour" : addUpperSpace(caseColour)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {caseColourArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setCaseColour(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Case Material</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {caseMaterial === "" ? "Select Case Material" : addUpperSpace(caseMaterial)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {caseMaterialArray.map((c, index) => (
                        <Link
                          to={"/createProduct/fashion"}
                          onClick={() => {
                            setCaseMaterial(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        )}
        {loadingCreate && <LoadingBox></LoadingBox>}
        <Button
          // size="large"
          color="secondary"
          type="submit"
          disabled={loadingCreate ? true : false}
        >
          Create
        </Button>
      </Form>
    </div>
  )
}

export default CreateFashion
