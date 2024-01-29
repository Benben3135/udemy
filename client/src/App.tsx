import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './view/pages/MainPage';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
