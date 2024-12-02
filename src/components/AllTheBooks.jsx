import { React, useState, useContext } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import horror from '../data/horror.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { ThemeContext } from '../components/Context'


const AllTheBooks = ({ searchBook }) => {
  const [selected, setSelected] = useState(false)
  const theme = useContext(ThemeContext)

  return (
    <Container data-bs-theme={theme}>
      <Row className="g-2">
        <Col>
          <h2>All The Books</h2>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row className="g-2">
            {horror.filter((b) => b.title.toLowerCase().includes(searchBook)).map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook book={book} selected={selected} setSelected={setSelected} />
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col md={4}>
          <Container className="h-100" fluid>
            <Row className="sticky-top" style={{ top: "15px" }}>
              <CommentArea asin={selected} />
            </Row>
          </ Container>
        </Col>
      </Row>
    </Container>
  )
}

export default AllTheBooks
