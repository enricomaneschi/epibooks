import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { DELETE_COMMENT_URL, API_KEY } from '../utils/constants'

const SingleComment = ({ comment }) => {
  const deleteComment = async () => {
    try {
      let response = await fetch(DELETE_COMMENT_URL,
        {
          method: 'DELETE',
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      if (response.ok) {
        alert('The review has been deleted!')
      } else {
        throw new Error('The review has not been deleted!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
