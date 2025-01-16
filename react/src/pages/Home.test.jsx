import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home page title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/welcome to the university platform/i);
  expect(titleElement).toBeInTheDocument();
});
