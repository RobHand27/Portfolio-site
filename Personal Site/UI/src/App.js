import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
// add more components here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;