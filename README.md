# Project Setup Guide

Follow the instructions below to set up the project on your local development environment.

## Prerequisites

- Make sure you have `yarn` installed globally on your system.

## Steps to Set Up the Project

1. **Clone the Repository:**
   - Copy the repository link.
   - Open your terminal and navigate to the desired folder.
   - Clone the repository using the command:
     ```bash
     git clone <repository-link>
     ```

2. **Open the Project in Visual Studio Code:**
   - Launch Visual Studio Code.
   - Open the cloned project folder in VS Code.

3. **Install Dependencies:**
   - Open the integrated terminal in VS Code and run:
     ```bash
     yarn
     ```

4. **Build the Project:**
   - Compile TypeScript files to JavaScript using:
     ```bash
     yarn run build
     ```
   - This will run the `tsc` command to transpile TypeScript files into JavaScript.

5. **Start the Development Server:**
   - To start the development server, use one of the following commands:
     ```bash
     yarn run start:dev
     ```
     or
     ```bash
     yarn start:dev
     ```

6. **Linting and Formatting:**
   - To check and fix linting issues using ESLint, run:
     ```bash
     yarn run lint:fix
     ```
   - To format the code using Prettier, run:
     ```bash
     yarn run prettier
     ```

## Additional Notes

- Ensure your development environment is set up correctly with all necessary configurations for ESLint and Prettier.
- Use these commands as needed to maintain code quality and consistency.
