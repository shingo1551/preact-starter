import { assert, expect, test } from 'vitest';

// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, 'matches original');
});

import { h } from 'preact';
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';
import { App } from '../src/app';
test('App', () => {
  const { container } = render(<App/>);
  const h1 = container.querySelector('h1');
  expect(h1?.textContent).toMatch('Vite + Preact');
});
