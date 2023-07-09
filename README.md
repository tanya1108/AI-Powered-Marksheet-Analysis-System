# AI-Powered-Marksheet-Analysis-System

![Project Logo](https://i.imgur.com/cNMNvN7.png)

The AI-Powered-Marksheet-Analysis-System is a Next.js project that utilizes the Tesseract.js npm package for optical mark recognition (OMR) conversion. The system is designed to extract details from a marksheet image and save them in a Supabase database. Additionally, it includes a search page that allows users to retrieve user details based on an ID provided from Supabase.

## Features

- Marksheet image analysis and extraction of details
- Optical mark recognition (OMR) using Tesseract.js
- Database integration with Supabase
- Search functionality to retrieve user details based on ID

## Prerequisites

- Node.js (version 20.2.0)
- npm (version 8.5.5)
- Supabase account and project details
- Tesseract.js npm package (automatically installed during setup, version: 4.1.1)

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
   - Create a table in supabase which stores basic user details

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
6. Currently there is a list of hardcoded subjects, which is used in pattern search in string


## Acknowledgments

- [Tesseract.js](https://www.npmjs.com/package/tesseract.js/v/2.1.1)
- [Supabase](https://supabase.io/)

## Contact

For any inquiries or feedback, please contact [tanyasinha828@gmail.com].

## TODO

- [x] Add unit tests
- [ ] Improve error handling
- [ ] Implement additional features (e.g., data visualization, user management)
- [ ] Add auth check
- [ ] Feature to add subjects from the dashboard itself, instead of hardcoding.

## Unit & Integration Test Results
- The unit test covers 4 test cases as of now:
  1. Text Extraction Process Success
  2. Text Extraction Process Failure
  3. User Details Search Success
  4. User Details Search Failure
   
- The integration test covers 4 test cases as of now:
  1. Insert in Database success
  2. Insert in daatbase failure
  3. Get data from DB Success
  4. Get data from DB Failure


  ![Project Logo](https://i.imgur.com/0Er28Bl.png)
