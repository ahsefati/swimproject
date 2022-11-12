import 'antd/dist/antd.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LayoutMain from "./pages/LayoutMain";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
