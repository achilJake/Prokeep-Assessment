# Prokeep React Login Form

Build a React app using your favorite boilerplate or seed (or from scratch), that consists of a login form that sends a login REST post request to this stubbed REST service: https://reqres.in You are free to use whatever tooling you want and whatever libraries you feel best solves the problem. Bonus points if the form looks sharp.

1. The login form should have an email input and a password input.
2. The login form should validate that the email is a valid email input and the password field has at least one character before you process the submit action.
3. You are free to do on change or submit validation – extra points for onChange.
4. Build a unit test for the form – testing both a valid login and an invalid login. you are free to use whatever testing stack you like.
5. Include a “dev” or “run” script in your package.json scripts
6. Include a “test” script in your package.json scripts
7. Upload to a code sharing service such as GitHub, Gitlab, etc. and let us know where to find it.
reqres.in

Reqres – A hosted REST-API ready to respond to your AJAX requests
A hosted REST-API ready to respond to your AJAX requests

Don’t hesitate to ask me if you have any questions.

Please let us know when you think you can have the challenge done.

## Table of Contents

- [Prokeep React Login Form](#prokeep-react-login-form)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development Server](#development-server)
    - [Building for Production](#building-for-production)
  - [Project Structure](#project-structure)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- **Node.js**: You will need Node.js (Recommended LTS version) and npm (comes with Node.js) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd my-react-ts-material-ui-project
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

### Development Server

To start the development server and run your React app, use the following command:

```bash
npm start
```

Your app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build your app for production, use:

```bash
npm run build
```

This will create an optimized build of your application in the `build` folder, ready for deployment.

## Project Structure

Here's an overview of the project structure:

```
├── public/             # Public assets (HTML, images, etc.)
├── src/                # Source code
│   ├── components/     # React components
│   ├── hook/           # Custom hook
│   ├── utils/          # Utilities
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Entry point
│   └── ...             # Other project files
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

You can start building your application by adding components, routes, and other features in the `src` directory.

## Testing

This project is set up with testing libraries to ensure the reliability of your code. You can run tests using the following command:

```bash
npm test
```

Feel free to add more tests in the `src` directory as your project grows.

## Contributing

Contributions are welcome! If you find a bug, have an enhancement request, or want to contribute to the project, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.