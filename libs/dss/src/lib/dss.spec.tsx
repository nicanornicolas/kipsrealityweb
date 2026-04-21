import { render } from '@testing-library/react';

import Dss from './dss';

describe('Dss', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dss />);
    expect(baseElement).toBeTruthy();
  });
});
