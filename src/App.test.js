import { render, screen, fireEvent } from '@testing-library/react'
import Welcome from './components/Welcome'
import CommentArea from './components/AddComment'
import App from './App'

test('renders welcome component', () => {
  render(<Welcome />)
  const welcomeElement = screen.getByText(
    /Welcome to EpiBooks/i
  )
  const alertElement = screen.getByText(
    /You are not subscribed yet!/i
  )
  expect(welcomeElement).toBeInTheDocument()
  expect(alertElement).toBeInTheDocument()
})



test('renders CommentArea', () => {
  render(<CommentArea />)
  const reviewPlaceholder = screen.getByPlaceholderText(
    /Leave a comment/i
  )
  expect(reviewPlaceholder).toBeInTheDocument()
})



test('border appears on click', () => {
  render(<App />)
  const allTheBookCards = screen.getAllByTestId('book-card')
  const bookCard = allTheBookCards[0]
  fireEvent.click(bookCard)
  expect(bookCard).toHaveStyle('border: 3px solid red')
})



test('reset border clicking another book', () => {
  render(<App />)
  const allTheBookCards = screen.getAllByTestId('book-card')
  const bookCard = allTheBookCards[0]
  fireEvent.click(bookCard)
  expect(bookCard).toHaveStyle('border: 3px solid red')
  const secondBookCard = allTheBookCards[1]
  fireEvent.click(secondBookCard)
  expect(bookCard).not.toHaveStyle('border: 3px solid red')
})



test('testing the absence of comments on load', () => {
  render(<App />)
  const booksComments = screen.queryAllByTestId('single-comment')
  expect(booksComments).toHaveLength(0)
})
