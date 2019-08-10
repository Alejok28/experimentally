import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RecommendedItem from '../../components/RecommendedItem';
import { videos } from '../__fixtures__/videos';

afterEach(cleanup);

test('renders image corrrectly', () => {
  const { container } = render(<RecommendedItem video={videos[0]} />);
  const image = container.querySelector('img');
  expect(image).toHaveProperty('alt', videos[0].snippet.title);
  expect(image).toHaveProperty('src', videos[0].snippet.thumbnails.default.url);
  expect(container).toMatchSnapshot();
});

test('calls "onClick" prop on image click', () => {
  const handleClick = jest.fn();
  const { container } = render(
    <RecommendedItem video={videos[0]} handleClick={handleClick} />
  );
  const image = container.querySelector('img');
  fireEvent.click(image);
  expect(handleClick.mock.calls.length).toBe(1);
});
