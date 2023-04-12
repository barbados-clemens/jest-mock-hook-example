import { render } from '@testing-library/react';

import LibOne from './lib-one';

describe('LibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibOne />);
    expect(baseElement).toBeTruthy();
  });
});
