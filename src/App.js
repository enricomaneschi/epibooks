import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { React, useState } from 'react'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import BookDetails from './components/BookDetails'
import { ThemeContext } from '../src/components/Context'

function App() {
  const [searchBook, setSearchBook] = useState('')
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <div
          className={`App ${theme}`}
          data-bs-theme={theme}>
          <MyNav searchBook={searchBook} setSearchBook={setSearchBook} toggleTheme={toggleTheme} />
          <Container>
            <Welcome />
            <Routes>
              <Route path="/" element={<AllTheBooks searchBook={searchBook} />} />
              <Route path="/details/:asin" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
          <MyFooter />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter >
  )
}

export default App
