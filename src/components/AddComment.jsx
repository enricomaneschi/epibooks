import { React, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { POST_COMMENT_URL, API_KEY } from '../utils/constants'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 3,
    elementId: null,
  })

  useEffect(() => {
    setComment((comment) => ({
      ...comment,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(POST_COMMENT_URL,
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: API_KEY
          }
        }
      )
      if (response.ok) {
        alert('The review has been posted!')
        setComment({
          comment: '',
          rate: 3,
          elementId: null,
        })
      } else {
        throw new Error('Something went wrong!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Comment:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Leave a comment"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Rate:</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default AddComment
