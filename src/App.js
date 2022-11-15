import 'antd/dist/antd.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LayoutMain from "./pages/LayoutMain";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
