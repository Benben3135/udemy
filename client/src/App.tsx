import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './view/pages/MainPage';
import NotFound from './view/pages/NotFound';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
