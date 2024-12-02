import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Welcome to EpiBooks</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="danger">
            You are not subscribed yet!
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
