import './App.css';
import React, { useState, useEffect } from "react";
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter as Router, HashRouter, Routes, Route } from 'react-router-dom';
import { GloabalProvider } from './context/GlobalState';
import "bootstrap/dist/css/bootstrap.min.css";

// https://molly1024.medium.com/react-一個-crud-增改刪查專案-9874b452ae36#5e9b

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto", marginTop: "0rem" }}>
      <GloabalProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </HashRouter>
      </GloabalProvider>
    </div>
  );
}

export default App;
