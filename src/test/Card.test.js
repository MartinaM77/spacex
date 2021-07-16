import { render, screen } from '@testing-library/react';
import Card from '../Card';

test('render of Card matches snapshot', () => {
  const launch = {
    id: 1,
    mission_name: 'Test Mission',
    details: 'Test details of the mission',
    launch_date_local: "2021-07-16T11:42:00-04:00"
  }
  const { container } = render(<Card {...launch} />);
  expect(container.firstChild).toMatchSnapshot();
});
