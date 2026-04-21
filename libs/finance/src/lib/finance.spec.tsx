/* @vitest-environment jsdom */
import { render } from '@testing-library/react';

import Finance from './finance';

describe('Finance', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Finance />);
    expect(baseElement).toBeTruthy();
  });
});
