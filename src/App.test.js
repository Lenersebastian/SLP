import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  delete window.IntersectionObserver;
});

test('zobrazí meno lekárky a obe pracoviská', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /MUDr\. Slávka Lenerová/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Ambulancia Malacky/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Ambulancia Stupava/i })).toBeInTheDocument();
});
