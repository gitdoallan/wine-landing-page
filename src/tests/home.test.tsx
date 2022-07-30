import { Home } from 'pages/Home';
import { render, screen } from '../utils/test-utils';

describe('Test home page elements', () => {
  it('should render a home page', async () => {
    render(<Home />);
  });
});
