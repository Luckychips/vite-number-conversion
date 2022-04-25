import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import './index.css';
import Home from "./components/Home";
import Converter from "./components/Converter";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/converter" element={<Converter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
