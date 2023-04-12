import { render } from '@testing-library/react';

import App from './app';
jest.mock('@jest-mocking-sample/lib-one', () => ({
  ...jest.requireActual('@jest-mocking-sample/lib-one'),
  useMyHook: () => ({ count: 2, increment: jest.fn() }),
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should mock hook', async () => {
    const { findByRole, findByTestId } = render(<App />);
    (await findByRole('button')).click();
    const p = await findByTestId('count');
    expect(p).toMatchInlineSnapshot(`
      <p
        data-testid="count"
      >
         Count: 
        2
         
      </p>
    `);
  });
});
