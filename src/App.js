import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<DetailPage/>} />
    </Routes>
  );
};

export default App;