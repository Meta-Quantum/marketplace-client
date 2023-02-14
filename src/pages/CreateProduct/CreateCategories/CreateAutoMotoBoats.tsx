import React,{ useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { Link, useNavigate } from "react-router-dom"
import { createProduct } from "../../../features/actions/productAction"
import { PRODUCT_CREATE_RESET } from "../../../features/constants/productConstants"
import toast from "react-hot-toast"
import {
  caroseryArray,
  colourArray,
  conditionArray,
  fuelArray,
  mainCategoryCreate,
  mainCategoryObj,
  steeringWheelArray,
  usefulTaskArray,
} from "../../../utils"
import { BiChevronDown } from "react-icons/bi"
import LoadingBox from "../../../components/LoadingBox"
import "../CreateProduct.scss"

const createToastSuccess = () => toast.success("Translation successfully created!")
const createToastFail = () => toast.error("Sorry! Translation unsuccessfully created!")
const createToastMaxLimit = () => toast("Max limit is 10MB on each file!")

function CreateAutoMotoBoats(props: any) {
  const [images, setImages] = useState([{}])
  const [imagesPreview, setImagesPreview] = useState([{}])
  const [name, setName] = useState("")
  const [mainCategory, setMainCategory] = useState("autoMotoBoats")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [price, setPrice] = useState("")
  const [condition, setCondition] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [km, setKm] = useState("")
  const [usefulTask, setUsefulTask] = useState("")
  const [carosery, setCarosery] = useState("")
  const [fuel, setFuel] = useState("")
  const [engine, setEngine] = useState("")
  const [horsePower, setHorsePower] = useState("")
  const [steeringWheel, setSteeringWheel] = useState("")
  const [description, setDescription] = useState("")
  const [colour, setColour] = useState("")

  const [categoryArray, setCategoryArray] = useState([{}])
  const [subCategoryArray, setSubCategoryArray] = useState([{}])
  const [modelArray, setModelArray] = useState([])
  const [modelSelect, setModelSelect] = useState("Select Model")
  const [mainCategorySelect, setMainCategorySelect] = useState("autoMotoBoats")
  const [categorySelect, setCategorySelect] = useState("Select Category")
  const [subCategorySelect, setSubCategorySelect] = useState("Select Sub Category")

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const createdProduct = useAppSelector((state: any) => state.createdProduct)

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
    myForm.set("category", category)
    myForm.set("subCategory", subCategory)
    myForm.set("price", price)
    myForm.set("description", description)
    myForm.set("condition", condition)
    myForm.set("model", model)
    myForm.set("fuel", fuel)
    myForm.set("year", year)
    myForm.set("carosery", carosery)
    myForm.set("colour", colour)
    myForm.set("km", km)
    myForm.set("engine", engine)
    myForm.set("horsePower", horsePower)
    myForm.set("steeringWheel", steeringWheel)
    myForm.set("usefulTask", usefulTask)
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

  const addUpperFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
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
    Object.entries(mainCategoryObj.autoMotoBoats).map((item: any) => {
      if (item[0] === categorySelect) {
        setSubCategoryArray(Object.getOwnPropertyNames(item[1]))
      }
      return null
    })
    Object.entries(mainCategoryObj.autoMotoBoats.cars).map((item: any) => {
      if (item[0] === subCategorySelect) {
        setModelArray(item[1])
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
                {mainCategoryCreate.map((mc: any, index) => (
                  <Link
                    to={`/createProduct/${mc}`}
                    onClick={() => {
                      setMainCategorySelect(mc)
                      setCategorySelect("Select Category")
                      setSubCategorySelect("Select Sub Category")
                      setModelSelect("Select Model")
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
                    to={"/createProduct/autoMotoBoats"}
                    onClick={() => {
                      setCategorySelect(c)
                      setSubCategorySelect("Select Sub Category")
                      setModelSelect("Select Model")
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
          {(categorySelect === "cars" ||
            categorySelect === "motoScooterAtv" ||
            categorySelect === "autoUtility" ||
            categorySelect === "trucksTrailersCaravans") && (
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
                        to={"/createProduct/autoMotoBoats"}
                        onClick={() => {
                          setSubCategorySelect(sc)
                          setModelSelect("Select Model")
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

              {categorySelect === "cars" && (
                <section className="mainCategoryCreate">
                  <label className="mb-1">Model</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {addUpperFirst(modelSelect)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {modelArray.map((m: any, index) => (
                        <Link
                          to={"/createProduct/autoMotoBoats"}
                          onClick={() => {
                            setModelSelect(m)
                            setModel(m)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperFirst(m)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
          {(mainCategorySelect === "houseAndGarden" ||
            categorySelect === "agroIndustrialMachinery" ||
            mainCategorySelect === "sportFreeTimeArt") && (
            <section className="mainCategoryCreate">
              <label className="mb-1">Condition</label>
              {/* Below there was controlid='mainCategory' */}
              <div className="dropdown">
                <button className="dropbtn" type="button">
                  {condition === "" ? "Select condition" : addUpperSpace(condition)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {conditionArray.map((c: any, index) => (
                    <Link
                      to={"/createProduct/autoMotoBoats"}
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
        {/* -----------------------------------------------------------------------------auto */}
        {(categorySelect === "cars" ||
          categorySelect === "motoScooterAtv" ||
          categorySelect === "autoUtility" ||
          categorySelect === "trucksTrailersCaravans") && (
          <>
            {/* Below there was controlid='year' */}
            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </Form.Group>
            {/* Below there was controlid='km' */}
            <Form.Group className="mb-3">
              <Form.Label>Km</Form.Label>
              <Form.Control name="km" value={km} onChange={(e) => setKm(e.target.value)} required />
            </Form.Group>
            {/* Below there was controlid='engine' */}
            <Form.Group className="mb-3">
              <Form.Label>Engine</Form.Label>
              <Form.Control
                name="engine"
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
                required
              />
            </Form.Group>
            {/* Below there was controlid='horsePower' */}
            <Form.Group className="mb-3">
              <Form.Label>HorsePower</Form.Label>
              <Form.Control
                name="horsePower"
                value={horsePower}
                onChange={(e) => setHorsePower(e.target.value)}
                required
              />
            </Form.Group>
            <div className="auto-create-selectors">
              {categorySelect === "autoUtility" && (
                <section className="mainCategoryCreate">
                  <label className="mb-1">Useful Task</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {usefulTask === "" ? "Select usefulTask" : addUpperSpace(usefulTask)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {usefulTaskArray.map((c: any, index) => (
                        <Link
                          to={"/createProduct/autoMotoBoats"}
                          onClick={() => {
                            setUsefulTask(c)
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

              <section className="mainCategoryCreate">
                <label className="mb-1">Carosery</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {carosery === "" ? "Select Carosery" : addUpperSpace(carosery)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {caroseryArray.map((c: any, index) => (
                      <Link
                        to={"/createProduct/autoMotoBoats"}
                        onClick={() => {
                          setCarosery(c)
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
                <label className="mb-1">Steering Wheel</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {steeringWheel === "" ? "Select Steering Wheel" : addUpperSpace(steeringWheel)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {steeringWheelArray.map((sw: any, index) => (
                      <Link
                        to={"/createProduct/autoMotoBoats"}
                        onClick={() => {
                          setSteeringWheel(sw)
                        }}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        {addUpperSpace(sw)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
              <section className="mainCategory">
                <label className="mb-1">Fuel</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {fuel === "" ? "Select Fuel" : addUpperSpace(fuel)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {fuelArray.map((f, index) => (
                      <Link
                        to={"/createProduct/autoMotoBoats"}
                        onClick={() => {
                          setFuel(f)
                        }}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        {addUpperSpace(f)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
              <section className="mainCategoryCreate">
                <label className="mb-1">Condition</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {condition === "" ? "Select condition" : addUpperSpace(condition)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {conditionArray.map((c: any, index) => (
                      <Link
                        to={"/createProduct/autoMotoBoats"}
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
                    {colourArray.map((c: any, index) => (
                      <Link
                        to={"/createProduct/autoMotoBoats"}
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
            </div>
          </>
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

export default CreateAutoMotoBoats
