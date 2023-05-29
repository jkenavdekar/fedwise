import React from 'react';
import './App.css'

import {
  Routes,
  Route,
} from 'react-router-dom';

import Arts from './components/Arts';
import Home from './components/Home';

function App() {

return (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog" element={<Arts />} />
    </Routes>
  </>
);
}

export default App;