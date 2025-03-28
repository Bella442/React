
# React Template App

### Overview
This project is a React-based web application. It provides a template for starting new React projects with pre-configured settings,
including routing, state management, and styling.
It's interacting with an API, which configuration details can be found in `.env.example` file. 

### Technologies used
- React
- TypeScript
- Vite App
- SWC
- Material UI
- Styled components
- Redux toolkit
- RTK Query
- React Router

### Project Architecture
All files (slices, API, types, etc.) should be in the folder of the particular page using them. 

If used in more than one place it should be in the shared folders.

### Setup
1. Clone the repository
2. Run `yarn`/`yarn install` to instal dependencies.
3. Make a copy of `.env.example` file and rename it to `.env.development`, then add the following value: 

   VITE_API_URL=http://universities.hipolabs.com

   **Note**: Do not commit values to `.env.example` file.
   
    All environment variables should be prefixed with `VITE_`

### Running the application
 `yarn dev`

 Runs the app in development mode.

 You can now open <http://localhost:5173/> to view it in the browser.

 `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### Import Aliases
When adding new folder to the project, the alias should be configured in tsconfig.json and vite.config.ts files.
