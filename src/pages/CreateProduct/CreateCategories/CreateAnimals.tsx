import React ,{ useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { Link, useNavigate } from "react-router-dom"
import { createProduct } from "../../../features/actions/productAction"
import { PRODUCT_CREATE_RESET } from "../../../features/constants/productConstants"
import toast from "react-hot-toast"
import { mainCategoryCreate, mainCategoryObj } from "../../../utils"
import { BiChevronDown } from "react-icons/bi"
import LoadingBox from "../../../components/LoadingBox"
import "../CreateProduct.scss"

const createToastSuccess = () => toast.success("Translation successfully created!")
const createToastFail = () => toast.error("Sorry! Translation unsuccessfully created!")
const createToastMaxLimit = () => toast("Max limit is 10MB on each file!")

function CreateAnimals(props: any) {
  const [images, setImages] = useState([{}])
  const [imagesPreview, setImagesPreview] = useState([{}])
  const [name, setName] = useState("")
  const [mainCategory, setMainCategory] = useState("animals")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [categoryArray, setCategoryArray] = useState([{}])
  const [subCategoryArray, setSubCategoryArray] = useState([{}])
  const [mainCategorySelect, setMainCategorySelect] = useState("animals")
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
  const addUpperSpace = (str: any) => {
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

    Object.entries(mainCategoryObj.animals).map((item) => {
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
                    to={"/createProduct/animals"}
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
          {category === "catsDogs" && (
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
                        to={"/createProduct/animals"}
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

export default CreateAnimals
