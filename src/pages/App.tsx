import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FrenchVersion from './FrenchVersion';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrenchVersion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
