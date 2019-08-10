import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import VideoInfo from '../../components/VideoInfo'
import { videos } from '../__fixtures__/videos';
import { statistics } from '../__fixtures__/statistics';
import { escapeHtml } from '../../utils/functions';

afterEach(cleanup);

test('renders VideoInfo correctly', () => {
  const { container, getByText } = render(
    <VideoInfo snippet={videos[0].snippet} statistics={statistics} />
  );
  const title = getByText(escapeHtml(videos[0].snippet.title));
  const description = getByText(videos[0].snippet.description);
  const icons = container.querySelectorAll('svg');

  expect(icons).toHaveLength(3);
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test('renders VideoInfo without statistics', () => {
  const { container, getByText } = render(<VideoInfo snippet={videos[0].snippet} />);
  const title = getByText(escapeHtml(videos[0].snippet.title));
  const description = getByText(videos[0].snippet.description);

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});