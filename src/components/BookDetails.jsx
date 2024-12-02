import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import horror from '../data/horror.json'

const BookDetails = () => {
  const params = useParams()
  const foundBook = horror.find((book) => book.asin === params.asin)

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col className="p-0">
          <Card>
            <Card.Img variant="top" src={foundBook.img} />
          </Card>
        </Col>
        <Col>
          <h2>{foundBook.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse volutpat
            condimentum tristique. Aenean est diam,
            porttitor ac nisl in, commodo sodales libero.
            Praesent fermentum, sapien sit amet faucibus
            rhoncus, elit leo tincidunt nibh, vel lobortis
            massa neque quis diam. Ut sed tortor sit amet
            sem interdum commodo. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default BookDetails
