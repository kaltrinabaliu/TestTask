// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider to connect Redux to React
import { store } from "./stores/index.ts"; // Import the Redux store
import App from "./App"; // Main App component
import "./index.css"; // Import your global CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
