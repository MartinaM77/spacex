import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Last Launches', () => {
  render(<App />);
  const element = screen.getByText(/Last Launches/i);
  expect(element).toBeInTheDocument();
});
