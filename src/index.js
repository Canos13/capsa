import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from './pages/History';
import Project from './pages/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/history" element={<History />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
