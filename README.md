# PlaywrightTypeScript

Hands-on practice for Playwright with TypeScript, focusing on testing user login functionality.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd PlaywrightTypeScript
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To run the tests, use the following command:
```bash
npx playwright test
```

## Test Cases

- **Login as Standard User**: Verifies that a user is navigated to the products page after logging in with valid credentials.
- **Login as Locked Out User**: Ensures that a user cannot log in with locked-out credentials and receives an appropriate error message.

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `baseURL`: The base URL of the application.
- `standard_user`: Username for the standard user.
- `locked_out_user`: Username for the locked-out user.
- `validPassword`: Password for the standard user.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
