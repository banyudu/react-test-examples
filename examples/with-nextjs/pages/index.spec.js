import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './index'

test('renders get started', async () => {
  render(<Home />);
  const greetingElement = screen.getByText('Get started by editing');
  expect(greetingElement).toBeInTheDocument();
})
