// src/main.jsx 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ThemeProvider from './components/context/ThemeContext.jsx'; // Import ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap your App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);

