import "./UserList.scss"
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../features/hooks"
import { useNavigate } from "react-router-dom"
import { deleteUser, listUsers } from "../../../features/actions/userActions"
import LoadingBox from "../../../components/LoadingBox"
import MessageBox from "../../../components/MessageBox"
import { USER_DETAILS_RESET } from "../../../features/constants/userConstants"

function AdminUserList(props: any) {
  const navigate = useNavigate()
  const userList = useAppSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userDelete = useAppSelector((state) => state.userDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = userDelete

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(listUsers())
    dispatch({
      type: USER_DETAILS_RESET,
    })
  }, [dispatch, successDelete])
  const deleteHandler = (user: any) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user._id))
    }
  }
  return (
    <div>
      <h1>Users</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && <MessageBox variant="success">User Deleted Successfully</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>IS SELLER</th>
              <th>IS ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isSeller ? "YES" : " NO"}</td>
                <td>{user.isAdmin ? "YES" : "NO"}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    // onClick={() => navigate(`/user/${user._id}/edit`)}
                    onClick={() => navigate(`/productlist/${user._id}`)}
                  >
                    Products
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => navigate(`/user/${user._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button type="button" className="small" onClick={() => deleteHandler(user)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AdminUserList
