import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../../components/Header'

afterEach(cleanup);

test('renders Header correctly', () => {
  const { container, getByText, getByPlaceholderText } = render(<Header />);
  const input = getByPlaceholderText('Buscar');
  const icon = container.querySelector('svg');
  const title = getByText('Experimentality');
  expect(title).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
  expect(input.value).toBe("");
  expect(container).toMatchSnapshot()
});

test('change search value', () => {
  const { getByPlaceholderText } = render(<Header />);
  const input = getByPlaceholderText('Buscar');
  fireEvent.change(input, { target: { value: 'react' } })
  expect(input.value).toBe("react");
});

test('input key press correctly', () => {
  const handleSubmit = jest.fn();
  const { getByPlaceholderText } = render(<Header handleSubmit={handleSubmit} />);
  const input = getByPlaceholderText('Buscar');
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  expect(handleSubmit.mock.calls.length).toBe(1);
});
