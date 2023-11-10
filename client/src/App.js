import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ContactUs from './Pages/Contact Us/ContactUs';
import HomePage from "./Pages/Home Page/HomePage";
import GalleryPage from "./Pages/Gallery Page/GalleryPage";


function App() {
  return (
    <>
  


  <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />}  />
        <Route path="/contact" element={  <ContactUs/>} />
        <Route path="/gallery" element={ <GalleryPage/> } />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
