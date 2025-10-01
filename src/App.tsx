import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Operations } from './pages/Operations'
import './App.css'

function App() {

  return (
    <>
         <BrowserRouter>
    <Routes>
      <Route path="/" element={<Operations />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
