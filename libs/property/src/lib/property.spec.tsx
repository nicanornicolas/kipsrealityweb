import { render } from '@testing-library/react';

import Property from './property';

describe('Property', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Property />);
    expect(baseElement).toBeTruthy();
  });
});
