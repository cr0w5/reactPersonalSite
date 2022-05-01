import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
