# AI-Powered-Marksheet-Analysis-System

![Project Logo](/path/to/logo.png)

The AI-Powered-Marksheet-Analysis-System is a Next.js project that utilizes the Tesseract.js npm package for optical mark recognition (OMR) conversion. The system is designed to extract details from a marksheet image and save them in a Supabase database. Additionally, it includes a search page that allows users to retrieve user details based on an ID provided from Supabase.

## Features

- Marksheet image analysis and extraction of details
- Optical mark recognition (OMR) using Tesseract.js
- Database integration with Supabase
- Search functionality to retrieve user details based on ID

## Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)
- Supabase account and project details
- Tesseract.js npm package (automatically installed during setup)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/AI-Powered-Marksheet-Analysis-System.git
   ```

2. Navigate to the project directory:

   ```shell
   cd AI-Powered-Marksheet-Analysis-System
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Configure Supabase:

   - Obtain your Supabase project details (URL and API key).
   - Update the configuration in `src/config.js` with your Supabase project URL and API key.

5. Start the development server:

   ```shell
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to access the application.

## Usage

1. Upload a marksheet image using the provided interface.
2. The system will process the image and extract the necessary details using Tesseract.js.
3. The extracted details will be saved in the Supabase database.
4. To retrieve user details, visit the search page and enter the desired ID.
5. The system will fetch the corresponding user details from the database and display them.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest enhancements, please submit a pull request or open an issue in this repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Tesseract.js](https://tesseract.projectnaptha.com/)
- [Supabase](https://supabase.io/)

## Contact

For any inquiries or feedback, please contact [your-email-address].

## TODO

- [ ] Add unit tests
- [ ] Improve error handling
- [ ] Implement additional features (e.g., data visualization, user management)
