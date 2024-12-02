import React from 'react'
import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentList = ({ commentsToShow }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment.id} />
    ))}
  </ListGroup>
)

export default CommentList
