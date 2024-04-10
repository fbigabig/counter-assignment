// import necessary react testing library helpers here
// import the Counter component here

import React from 'react'

import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'
import userEvent from '@testing-library/user-event'
/*
beforeEach(() => {
  const server = setupServer(
    <Counter />)
})
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAllAll(() => server.close())
*/
test('renders counter message', () => {
  render(<Counter />)
  const countermsg = screen.getByText("Counter");
  expect(countermsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />)
  const count = screen.getByText("0");
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  render(<Counter />)
  const incr = screen.getByRole('button', {name: '+'})
  userEvent.click(incr)
  const count = screen.getByText("1");
  expect(count).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  render(<Counter />)
  const incr = screen.getByRole('button', {name: '-'})
  userEvent.click(incr)
  const count = screen.getByText("-1");
  expect(count).toBeInTheDocument();
});
