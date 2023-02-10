
import { Button, FloatingLabel, ListGroup } from "react-bootstrap"
import { Form } from "react-router-dom"
import Rating from "./Rating"
import MessageBox from "./MessageBox"
import React, { useRef, useState } from "react"

function Review(props: any) {
  const reviewsRef = useRef()
  const submitHandler = (e: any) => {
    e.preventDefault()
  }
  const [rating, setRating] = useState("")
  const [comment, setComment] = useState("")
  return (
    <>
      <div className="my-3">
        <MessageBox>There is no review</MessageBox>

        <div className="my-3">
          <form onSubmit={submitHandler}>
            <h2>Write a customer review</h2>
            {/* Below there was controlId="rating" */}
            <section className="mb-3">
              <label>Rating</label>
              <select
                aria-label="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="select-star-review"
              >
                <option value="">Select...</option>
                <option value="1">1- Poor</option>
                <option value="2">2- Fair</option>
                <option value="3">3- Good</option>
                <option value="4">4- Very good</option>
                <option value="5">5- Excelent</option>
              </select>
            </section>
            {/* Below there was controlId="rating" */}
            <section className="mb-3">
              <textarea
                // as="textarea"
                placeholder="Leave a comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="comment-review"
              />
            </section>

            <div className="mb-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Review
