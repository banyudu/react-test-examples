import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './index'

test('renders Page index', async () => {
  render(<Home />);
  const greetingElement = screen.getByText('Page index');
  expect(greetingElement).toBeInTheDocument();
})
