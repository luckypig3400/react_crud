import './App.css';
import React, { useState, useEffect } from "react";
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: 接下來跟著文章改為進階版(拆分各個Components)
// https://molly1024.medium.com/react-一個-crud-增改刪查專案-9874b452ae36#5e9b

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
