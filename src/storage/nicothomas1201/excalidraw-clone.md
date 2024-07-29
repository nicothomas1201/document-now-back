# Excalidraw Clone Documentation

## 1. Introduction

### Project Description
Excalidraw Clone is a mini clone of Excalidraw built with React and TypeScript. It uses Rough.js for the sketchy, hand-drawn style. The project was created for learning purposes.

### Technologies Used
- React
- React-DOM
- Rough.js
- Zustand
- @types/react
- @types/react-dom
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- @vitejs/plugin-react-swc
- ESLint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- TypeScript
- Vite
- vite-tsconfig-paths

## 2. Installation

### Prerequisites
- Node.js (version 14 or later)
- npm (version 6 or later) or yarn

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/excalidraw-clone.git
   cd excalidraw-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 3. Project Structure

### General Description
The project follows a standard React structure with additional TypeScript configurations. The main directories and files are:

- `src/`: Contains the source code of the application.
  - `components/`: React components.
  - `hooks/`: Custom hooks.
  - `store/`: Zustand store for state management.
  - `utils/`: Utility functions.
- `public/`: Static files and assets.
- `.eslintrc.cjs`: ESLint configuration.
- `.gitignore`: Git ignore file.
- `index.html`: Main HTML file.
- `package.json`: Project metadata and scripts.
- `README.md`: Project documentation.

### Main Components
- `App.tsx`: The main application component.
- `Canvas.tsx`: The canvas component where drawing occurs.
- `Tools.tsx`: The toolbar component for selecting tools.
- `useCanvas.ts`: Custom hook for managing canvas interactions.
- `useCurrentTool.ts`: Custom hook for managing the current tool state.

## 4. User Guide

### Navigating the Application
- **Move Canvas**: Use the mouse wheel to zoom in and out. Press the `Alt` key and click-drag to pan the canvas.
- **Select Tool**: Click on the tool icons in the toolbar or use the number keys:
  - `1`: Pan tool
  - `2`: Select tool
  - `3`: Rectangle tool
  - `4`: Line tool

### Screenshots
![Screenshot 1](path/to/screenshot1.png)
![Screenshot 2](path/to/screenshot2.png)

## 5. Development

### Setting Up the Development Environment
1. Ensure you have Node.js and npm installed.
2. Clone the repository and install dependencies as described in the Installation section.

### npm Scripts
- `dev`: Starts the development server using Vite.
- `build`: Builds the application for production.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Previews the production build.

## 6. Components and Pages

### Component Descriptions
- **App.tsx**: The main application component that renders the `Tools` and `Canvas` components.
- **Canvas.tsx**: The canvas component where drawing occurs. It uses the `useCanvas` hook to manage interactions.
- **Tools.tsx**: The toolbar component that allows users to select different drawing tools.
- **useCanvas.ts**: A custom hook that manages the canvas state and interactions, including drawing, panning, and zooming.
- **useCurrentTool.ts**: A custom hook that manages the current tool state and handles keyboard shortcuts for tool selection.

### Pages
The application is a single-page application (SPA) with the main page rendered by `App.tsx`.

## 7. Styles and Themes

### Styling System
The application uses CSS modules for styling. The main styles are defined in `App.css` and `index.css`.

### Themes
The application does not currently support multiple themes.

## 8. State Management

### Context or Redux
The application uses Zustand for state management. The `useToolsStore` is used to manage the current tool state.

### Custom Hooks
- **useCanvas.ts**: Manages the canvas state and interactions.
- **useCurrentTool.ts**: Manages the current tool state and handles keyboard shortcuts.

## 9. API and Services

### API Interaction
The application does not interact with external APIs.

## 10. Testing

### Unit and Integration Tests
The project does not currently include unit or integration tests.

### Test Coverage
The project does not currently include test coverage tools.

## 11. Deployment

### Build and Deployment Process
1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist` directory to your hosting provider.

## 12. Contribution

### Contributor Guide
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Open a pull request with a detailed description of your changes.

### Roadmap
Future features and improvements are planned, including:
- Adding more drawing tools.
- Implementing undo/redo functionality.
- Improving performance and responsiveness.

## 13. FAQ

### Frequently Asked Questions
- **Q: How do I change the drawing tool?**
  - **A:** Click on the tool icons in the toolbar or use the number keys (1-4) to select different tools.

- **Q: How do I zoom and pan the canvas?**
  - **A:** Use the mouse wheel to zoom in and out. Press the `Alt` key and click-drag to pan the canvas.

## 14. Contacts

### Development Team
For any questions or support, please contact the development team at [support@example.com](mailto:support@example.com).

---

This documentation provides a comprehensive overview of the Excalidraw Clone project, including installation instructions, project structure, user guide, development setup, and contribution guidelines.