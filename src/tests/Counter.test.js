// Documentation Source: https://testing-library.com/docs/react-testing-library/intro/

// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', async () => {
  // Complete the unit test below based on the objective in the line above
  const counterText = screen.getByText(/Counter/i);
  expect(counterText).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText("+");
  const currentCount = screen.getByTestId('count').textContent;
  await userEvent.click(incrementButton);
  expect(screen.getByTestId('count')).toHaveTextContent(Number(currentCount) + 1);
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText("-");
  const currentCount = screen.getByTestId('count').textContent;
  await userEvent.click(decrementButton);
  expect(screen.getByTestId('count')).toHaveTextContent(Number(currentCount) - 1);
});
