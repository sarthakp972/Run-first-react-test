import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct content', () => {
  render(<App />);
  const heading = screen.getByText(/hello world/i); // Replace with actual content from App
  expect(heading).toBeInTheDocument();
});

// the test function provided by testing frameworks like Vitest, Jest, or Mocha accepts two or three parameters. Let's break down the three-parameter version and its use.
//test(name, fn, timeout)

//Parameters:
// name (String):
// A descriptive name for the test. This should explain what is being tested.
// Example: "adds two numbers correctly".
// fn (Function):

// A callback function that contains the test logic. This is where you perform assertions.
// It can be synchronous or asynchronous (e.g., if testing promises or async/await code).
// timeout (Number) (Optional):

// Specifies the maximum time (in milliseconds) the test can take to execute before it fails with a timeout error.
// Useful for preventing tests from hanging indefinitely due to unexpected behavior.