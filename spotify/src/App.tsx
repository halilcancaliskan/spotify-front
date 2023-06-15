import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-navbar">
          <Navbar />
        </header>
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
