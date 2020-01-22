import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
