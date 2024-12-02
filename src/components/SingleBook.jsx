import React from 'react'
import { Button, Card, Container, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ selected, setSelected, book }) => {
  const navigate = useNavigate()

  return (
    <Container className="Card-Container">
      <Row>
        <Col className="p-0">
          <Card className="SingleBook"
            onClick={() => setSelected(book.asin)}
            style={{
              border: selected === book.asin ? "3px solid red" : "none"
            }}
            data-testid="book-card">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title className="card-title">{book.title}</Card.Title>
              <Button
                className="card-button"
                onClick={() => navigate(`/details/${book.asin}`)}>
                Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleBook
