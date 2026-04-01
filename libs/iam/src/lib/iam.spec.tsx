import { render } from '@testing-library/react';

import Iam from './iam';

describe('Iam', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Iam />);
    expect(baseElement).toBeTruthy();
  });
});
