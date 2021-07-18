import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from '../App';

test('renders Last Launches', () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const element = screen.getByText(/Last Launches/i);
  expect(element).toBeInTheDocument();
});
