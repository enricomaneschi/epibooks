import { React, useState, useContext } from 'react'
import { Container, Nav, Navbar, Form, Button, ToggleButton, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const MyNav = ({ searchBook, setSearchBook, toggleTheme }) => {
  const [checked, setChecked] = useState(false)
  const theme = useContext(ThemeContext)

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme={theme}>
      <Container>
        <Link className="link" to="/">
          <Navbar.Brand>EpiBooks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-2">
            <Nav.Link>
              <Link className="link" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link><Link className="link" to="/About">About</Link></Nav.Link>
            <Nav.Link><Link className="link" to="/Browse">Browse</Link></Nav.Link>
            <ButtonGroup>
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => {
                  toggleTheme()
                  setChecked(e.currentTarget.checked)
                }}>
                {checked ? "Dark" : "Light"}
              </ToggleButton>
            </ButtonGroup>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search a book"
              value={searchBook}
              onChange={(e) => setSearchBook(e.target.value)} />
            <Button type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default MyNav
