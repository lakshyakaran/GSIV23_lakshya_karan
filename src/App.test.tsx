import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './view/Home';

test('renders movie panels with skeletons', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const skeletonElements = screen.getAllByTestId('skeleton');
  expect(skeletonElements.length).toBe(20);
});
