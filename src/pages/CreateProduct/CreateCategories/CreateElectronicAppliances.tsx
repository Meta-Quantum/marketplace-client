import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { Link, useNavigate } from "react-router-dom"
import { createProduct } from "../../../features/actions/productAction"
import { PRODUCT_CREATE_RESET } from "../../../features/constants/productConstants"
import toast from "react-hot-toast"
import {
  brandAppliancesArray,
  brandTvArray,
  colourArray,
  compatibilityArray,
  conditionArray,
  laptopBrandArray,
  laptopProcesorBrandArray,
  mainCategoryCreate,
  mainCategoryObj,
  memoryRArray,
  nintendoArray,
  playstationArray,
  rezolutionArray,
  sizeDiagonalArray,
  storageTypeArray,
  videoTypeArray,
  xboxArray,
} from "../../../utils"
import { BiChevronDown } from "react-icons/bi"
import LoadingBox from "../../../components/LoadingBox"
import "../CreateProduct.scss"

const createToastSuccess = () => toast.success("Translation successfully created!")
const createToastFail = () => toast.error("Sorry! Translation unsuccessfully created!")
const createToastMaxLimit = () => toast("Max limit is 10MB on each file!")

function CreateElectronicAppliances(props: any) {
  const [images, setImages] = useState([{}])
  const [imagesPreview, setImagesPreview] = useState([{}])
  const [name, setName] = useState("")
  const [mainCategory, setMainCategory] = useState("electronicsAppliances")
  const [condition, setCondition] = useState("")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [size, setSize] = useState("")
  const [model, setModel] = useState("")
  const [whichFor, setWhichFor] = useState("")
  const [colour, setColour] = useState("")
  const [brand, setBrand] = useState("")
  const [memoryR, setMemoryR] = useState("")
  const [videoType, setVideoType] = useState("")
  const [storageType, setStorageType] = useState("")
  const [processorBrand, setProcessorBrand] = useState("")
  const [rezolution, setRezolution] = useState("")
  const [categoryArray, setCategoryArray] = useState([{}])
  const [subCategoryArray, setSubCategoryArray] = useState([{}])
  const [mainCategorySelect, setMainCategorySelect] = useState("electronicsAppliances")
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
    myForm.set("size", size)
    myForm.set("model", model)
    myForm.set("whichFor", whichFor)
    myForm.set("colour", colour)
    myForm.set("brand", brand)
    myForm.set("memoryR", memoryR)
    myForm.set("videoType", videoType)
    myForm.set("storageType", storageType)
    myForm.set("processorBrand", processorBrand)
    myForm.set("rezolution", rezolution)
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
    Object.entries(mainCategoryObj).map((item: any, index) => {
      if (item[0] === mainCategorySelect) {
        setCategoryArray(Object.getOwnPropertyNames(item[1]))
      }
      return null
    })

    Object.entries(mainCategoryObj.electronicsAppliances).map((item) => {
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
              <button className="dropbtn">
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
              <button className="dropbtn">
                {addUpperSpace(categorySelect)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {categoryArray.map((c: any, index) => (
                  <Link
                    to={"/createProduct/electronicsAppliances"}
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
          {(categorySelect === "phones" ||
            categorySelect === "TV" ||
            categorySelect === "appliances" ||
            categorySelect === "tabletsAndReaders" ||
            categorySelect === "phonesTabletsParts" ||
            categorySelect === "videoProiection" ||
            categorySelect === "webAndServers" ||
            categorySelect === "laptopPcGaming" ||
            categorySelect === "phonesTabletsAccesories") && (
            <>
              <section className="mainCategoryCreate">
                <label className="mb-1">Sub Category</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn">
                    {addUpperSpace(subCategorySelect)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {subCategoryArray.map((sc: any, index) => (
                      <Link
                        to={"/createProduct/electronicsAppliances"}
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
          {(mainCategorySelect === "houseAndGarden" ||
            categorySelect === "agroIndustrialMachinery" ||
            mainCategorySelect === "sportFreeTimeArt") && (
            <section className="mainCategoryCreate">
              <label className="mb-1">Condition</label>
              {/* Below there was controlid='mainCategory' */}
              <div className="dropdown">
                <button className="dropbtn">
                  {condition === "" ? "Select condition" : addUpperSpace(condition)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {conditionArray.map((c, index) => (
                    <Link
                      to={"/createProduct/electronicsAppliances"}
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

        {/* ------------------------------------------------------------------------electronic */}
        {mainCategorySelect === "electronicsAppliances" && (
          <div className="electronicsAppliances-create-selectors">
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
                  {conditionArray.map((c, index) => (
                    <Link
                      to={"/createProduct/electronicsAppliances"}
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
            {subCategorySelect === "TV" && (
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
                      {brandTvArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
                          onClick={() => {
                            setBrand(brand)
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
                  <label className="mb-1">Rezolution</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {rezolution === "" ? "Select Rezolution" : addUpperSpace(rezolution)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {rezolutionArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
                          onClick={() => {
                            setRezolution(rezolution)
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
            {categorySelect === "phones" && (
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
                        to={"/createProduct/electronicsAppliances"}
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
            )}
            {subCategorySelect === "laptop" && (
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
                      {laptopBrandArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
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
                      {sizeDiagonalArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
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
                  <label className="mb-1">Memory Ram</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {memoryR === "" ? "Select Memory Ram" : addUpperSpace(memoryR)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {memoryRArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
                          onClick={() => {
                            setMemoryR(c)
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
                  <label className="mb-1">Video Type</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {videoType === "" ? "Select Video Type" : addUpperSpace(videoType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {videoTypeArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
                          onClick={() => {
                            setVideoType(c)
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
                  <label className="mb-1">Storage Type</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {storageType === "" ? "Select Storage Type" : addUpperFirst(storageType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {storageTypeArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
                          onClick={() => {
                            setStorageType(c)
                          }}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {addUpperFirst(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Processor Brand</label>
                  {/* Below there was controlid='mainCategory' */}
                  <div className="dropdown">
                    <button className="dropbtn" type="button">
                      {processorBrand === ""
                        ? "Select Processor Brand"
                        : addUpperSpace(processorBrand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {laptopProcesorBrandArray.map((c, index) => (
                        <Link
                          to={"/createProduct/electronicsAppliances"}
                          onClick={() => {
                            setProcessorBrand(c)
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
            {subCategorySelect === "consoleAccesories" && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Compatibility</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {whichFor === "" ? "Select Compatibility" : addUpperSpace(whichFor)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {compatibilityArray.map((c, index) => (
                      <Link
                        to={"/createProduct/electronicsAppliances"}
                        onClick={() => {
                          setWhichFor(c)
                        }}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        {addUpperFirst(c)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {subCategorySelect === "Playstation" && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Model</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {model === "" ? "Select Model" : addUpperSpace(model)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {playstationArray.map((c, index) => (
                      <Link
                        to={"/createProduct/electronicsAppliances"}
                        onClick={() => {
                          setModel(c)
                        }}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        {addUpperFirst(c)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {subCategorySelect === "NintendoWii" && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Storage Type</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {model === "" ? "Select Model" : addUpperSpace(model)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {nintendoArray.map((c, index) => (
                      <Link
                        to={"/createProduct/electronicsAppliances"}
                        onClick={() => {
                          setStorageType(c)
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
            {subCategorySelect === "Xbox" && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Model</label>
                {/* Below there was controlid='mainCategory' */}
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    {model === "" ? "Select Model" : addUpperSpace(model)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {xboxArray.map((c, index) => (
                      <Link
                        to={"/createProduct/electronicsAppliances"}
                        onClick={() => {
                          setModel(c)
                        }}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        {addUpperFirst(c)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {categorySelect === "appliances" && (
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
                    {brandAppliancesArray.map((c, index) => (
                      <Link
                        to={"/createProduct/electronicsAppliances"}
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

export default CreateElectronicAppliances
