import { render } from '@testing-library/react';
import Card from '../Card';
import { MockedProvider } from '@apollo/client/testing';

test('render of Card matches snapshot', () => {
  const launch = {
    id: 1,
    mission_name: 'Test Mission',
    details: 'Test details of the mission',
    launch_date_local: '2021-07-16T11:42:00-04:00'
  }
  const { container } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Card {...launch} />
    </MockedProvider>
    );
  expect(container.firstChild).toMatchSnapshot();
});
