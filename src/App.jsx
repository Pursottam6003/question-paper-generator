import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Questions from './pages/questions';
import Home from './pages/Home';
import LayoutComponent from './layout/LayoutComponent';
const App = () => {
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <Route path="/questions" element={<Questions />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  )
}

export default App

