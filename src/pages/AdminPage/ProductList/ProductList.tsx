import "./ProductList.scss"
import React,{ useEffect } from "react"
import { Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import {  deleteProduct, getProducts } from "../../../features/actions/productAction"
import LoadingBox from "../../../components/LoadingBox"
import MessageBox from "../../../components/MessageBox"
import {
  
  PRODUCT_DELETE_RESET,
} from "../../../features/constants/productConstants"

function AdminProductLine(props: any) {
  const navigate = useNavigate()
  const { pageNumber = 1 }:any = useParams()
  const { pathname } = useLocation()
  const sellerMode = pathname.indexOf("/seller") >= 0
  const productsList:any = useAppSelector((state) => state.productsList)
  const { loading, error, products, page, pages }:any = productsList

  const createdProduct:any = useAppSelector((state) => state.createdProduct)
  console.log(createdProduct)
  // const {
  //   loading: loadingCreate,
  //   error: errorCreate,
  //   success: successCreate,
  //   product: created,
  // } = createdProduct

  const deletedProduct:any = useAppSelector((state) => state.deletedProduct)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = deletedProduct
  const userSignin:any = useAppSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(props);
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET })
    }
    dispatch(getProducts({ seller: sellerMode ? userInfo._id : "", pageNumber }))
  }, [
    // createdProduct,
    dispatch,
    navigate,
    sellerMode,
    // successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ])
  const deleteHandler = (product: any) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product._id))
    }
  }
  const createHandler = () => {
    navigate("/createProduct")
  }

  return (
    <div>
      <div className="row">
        <h1>Products</h1>
        <Button variant="info" type="button" className="primary" onClick={createHandler}>
          Create Product
        </Button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>SELLER</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.seller.seller.name}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() => navigate(`/product/${product._id}/edit`)}
                    >
                      Edit
                    </button>
                    <button type="button" className="small" onClick={() => deleteHandler(product)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row center pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? "active" : ""}
                key={x + 1}
                to={`/productlist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default AdminProductLine
