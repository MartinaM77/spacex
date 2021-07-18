import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import DetailBox from '../DetailBox';

test('display mission_name as title of the image', () => {
  const launch = {
    mission_name: 'Test Mission',
  }
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <DetailBox {...launch} />
    </MockedProvider>
  );
  const title = screen.getByTitle('Test Mission');
  expect(title).toBeInTheDocument();
});

test('render Stars image when no image url is provided', () => {
  const launch = {
    mission_name: 'Test Mission',
  }
  const { container } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <DetailBox {...launch} />
    </MockedProvider>
  );
  const mediaElement = container.querySelector('.MuiCardMedia-root');
  expect(mediaElement.style.backgroundImage).toEqual('url(stars.png)');
});

test('See more button is not displayed when no links are provided', () => {
  const launch = {
    mission_name: 'Test Mission',
    links: {}
  }
  const { container } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <DetailBox {...launch} />
    </MockedProvider>
  );
  const seeMoreButton = container.querySelector('button');
  expect(seeMoreButton).not.toBeInTheDocument();
});

test('See more button is displayed when links are provided', () => {
  const launch = {
    mission_name: 'Test Mission',
    links: {
      article_link: '/michlo.sk'
    }
  }
  const { container } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <DetailBox {...launch} />
    </MockedProvider>
  );
  const seeMoreButton = container.querySelector('button');
  expect(seeMoreButton).toBeInTheDocument();
});

test('ship text is link with href when url is provided', () => {
  const launch = {
    mission_name: 'Test Mission',
    ships: [
      {
        name: 'Test ship',
        url: 'https://michlo.sk'
      }
    ]
  }
  const { container } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <DetailBox {...launch} />
    </MockedProvider>
  );
  const linkElement = container.querySelector('a');
  expect(linkElement.text).toEqual('Test ship');
  expect(linkElement.href).toEqual('https://michlo.sk/');
});
