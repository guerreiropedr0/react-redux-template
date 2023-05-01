# React-Redux Template

This is a React-Redux template that communicates with an API for authentication. It provides a basic setup for creating a React application with Redux state management and authentication handling.

The API template used for this project is available at [api-authentication](https://github.com/guerreiropedr0/api-authentication).

## Features

- React 18
- React-Redux 8
- Authentication handling with JWT

## Installation

To install the dependencies, run:

```
npm install
```

## Usage

To start the development server, run:

```
npm start
```

To create a production build, run:

```
npm build
```

To run the tests, run:

```
npm run test
```

## Configuration

Before running the application, you need to set the environment variables for the API base URL. You can do this by creating a `.env` file at the root of the project with the following values:

```
REACT_APP_API_BASE_URL=<API_BASE_URL>
```

Replace `<API_BASE_URL>` with the base URL of your API.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
