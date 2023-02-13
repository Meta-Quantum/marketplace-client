import "./Support.scss"
import React, { useEffect, useRef, useState } from "react"
import socketIOClient from "socket.io-client"
import { useAppSelector } from "../../../features/hooks"
import MessageBox from "../../../components/MessageBox"

let allUsers: any = []
let allMessages: any = []
let allSelectedUser:any = {}
const ENDPOINT =
  window.location.host.indexOf("localhost") >= 0 ? "http://127.0.0.1:5000" : window.location.host

function AdminSupport() {
  const [selectedUser, setSelectedUser] = useState<any>({})
  const [socket, setSocket] = useState<any>([])
  const uiMessagesRef:any = useRef(null)
  const [messageBody, setMessageBody] = useState("")
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const userSignin:any = useAppSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  useEffect(() => {
    if (uiMessagesRef.current) {
      uiMessagesRef.current.scrollBy({
        top: uiMessagesRef.current.clientHeight,
        left: 0,
        behavior: "smooth",
      })
    }

    if (!socket) {
      const sk:any = socketIOClient(ENDPOINT)
      setSocket(sk)
      sk.emit("onLogin", {
        _id: userInfo._id,
        name: userInfo.name,
        isAdmin: userInfo.isAdmin,
      })
      sk.on("message", (data: any) => {
        if (allSelectedUser._id === data._id) {
          allMessages = [...allMessages, data]
        } else {
          const existUser = allUsers.find((user: any) => user._id === data._id)
          if (existUser) {
            allUsers = allUsers.map((user: any) =>
              user._id === existUser._id ? { ...user, unread: true } : user,
            )
            setUsers(allUsers)
          }
        }
        setMessages(allMessages)
      })
      sk.on("updateUser", (updatedUser: any) => {
        const existUser = allUsers.find((user: any) => user._id === updatedUser._id)
        if (existUser) {
          allUsers = allUsers.map((user: any) => (user._id === existUser._id ? updatedUser : user))
          setUsers(allUsers)
        } else {
          allUsers = [...allUsers, updatedUser]
          setUsers(allUsers)
        }
      })
      sk.on("listUsers", (updatedUsers: any) => {
        allUsers = updatedUsers
        setUsers(allUsers)
      })
      sk.on("selectUser", (user: any) => {
        allMessages = user.messages
        setMessages(allMessages)
      })
    }
  }, [messages, socket, users, userInfo])

  const selectUser = (user: any) => {
    allSelectedUser = user
    setSelectedUser(allSelectedUser)
    const existUser = allUsers.find((x:any) => x._id === user._id)
    if (existUser) {
      allUsers = allUsers.map((x: any) => (x._id === existUser._id ? { ...x, unread: false } : x))
      setUsers(allUsers)
    }
    socket.emit("onUserSelected", user)
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    if (!messageBody.trim()) {
      alert("Error. Please type message.")
    } else {
      allMessages = [...allMessages, { body: messageBody, name: userInfo.name }]
      setMessages(allMessages)
      setMessageBody("")
      setTimeout(() => {
        socket.emit("onMessage", {
          body: messageBody,
          name: userInfo.name,
          isAdmin: userInfo.isAdmin,
          _id: selectedUser._id,
        })
      }, 1000)
    }
  }

  return (
    <div className="row top full-container">
      <div className="col-1 support-users">
        {users.filter((x: any) => x._id !== userInfo._id).length === 0 && (
          <MessageBox>No Online User Found</MessageBox>
        )}
        <ul>
          {users
            .filter((x: any) => x._id !== userInfo._id)
            .map((user: any) => (
              <li key={user._id} className={user._id === selectedUser._id ? "  selected" : "  "}>
                <button className="block" type="button" onClick={() => selectUser(user)}>
                  {user.name}
                </button>
                <span className={user.unread ? "unread" : user.online ? "online" : "offline"} />
              </li>
            ))}
        </ul>
      </div>
      <div className="col-3 support-messages">
        {!selectedUser._id ? (
          <MessageBox>Select a user to start chat</MessageBox>
        ) : (
          <div>
            <div className="row">
              <strong>Chat with {selectedUser.name} </strong>
            </div>
            <ul ref={uiMessagesRef}>
              {messages.length === 0 && <li>No message.</li>}
              {messages.map((msg:any, index) => (
                <li key={index}>
                  <strong>{`${msg.name}: `}</strong> {msg.body}
                </li>
              ))}
            </ul>
            <div>
              <form onSubmit={submitHandler} className="row">
                <input
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  type="text"
                  placeholder="type message"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminSupport
