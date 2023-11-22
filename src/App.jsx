import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Questions from './pages/questions';
const App = () => {
  const fetchData = async (route) => {
    const response = await fetch('http://192.168.1.46/questions', {
      method: 'POST',
      body: JSON.stringify(vehicle),
      headers: {
        'Content-type': 'application/json'
      },
    })

    if (!response.ok) alert(`An error occured: ${response.statusText}`);
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/question" element={<Questions/>} />
        </Routes>
  </BrowserRouter>
  )
}

export default App

