import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Router.css';
import Home from '../pages/Home';
import Login from '../pages/Login';
import About from '../pages/About';

interface RouterProps {
  children: ReactElement;
}

const Router = ({ children }: RouterProps) => (
  <BrowserRouter>
    <div className="container">
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Router;
