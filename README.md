# SpaceX Launches
See 10 latest launches and more details about the selected launch.

## How to run the application

Clone the **spacex** repository \
`git clone https://github.com/MartinaM77/spacex.git`

Go to the project directory \
`cd spacex`

Install needed dependencies.\
`npm install`

Now you are ready to start the application!

### `npm start`
runs the application in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
launches the tests.

## App navigation
Route /dashboard contains latest Launches.

Route /mission?id=105 contains detail information about the launch with id 105.

Built application is deployed on [http://spacex.michlo.sk](http://spacex.michlo.sk).

## Used technologies

Core of this application is created by `create-react-app`

Application uses **Material-ui** components for layout.

Application routes are handled by **React Router DOM**.

Data are fetched from SpaceX GraphQL API using **Apollo Client**.

Testing is handled by **React Testing Library**.

## Possible TODOs

* Transitions when displaying components.

* Display all images in a slider for the selected launch

* Display all ship images for selected launch
