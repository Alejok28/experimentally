import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RecomendedList from '../../components/RecomendedList';
import { videos } from '../__fixtures__/videos';

afterEach(cleanup);

test('renders loading when ', () => {
  const { container } = render(<RecomendedList loading={true} />);
  const icon = container.querySelector('svg');
  expect(icon).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test('renders when videos props is passed', () => {
  const { container } = render(<RecomendedList videos={videos} />);
  const images = container.querySelectorAll('img');
  expect(images).toHaveLength(6);
  expect(container).toMatchSnapshot();
});
