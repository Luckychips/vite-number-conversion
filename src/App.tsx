import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/home">Home</Link>
          <Link to="/converter">Converter</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
