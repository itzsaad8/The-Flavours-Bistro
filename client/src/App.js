import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Pages
import ContactUs from './Pages/Contact Us/ContactUs';
import HomePage from "./Pages/Home Page/HomePage";
import GalleryPage from "./Pages/Gallery Page/GalleryPage";
import SelfCateringFood from "./Pages/SelfCateringFood/SelfCateringFood";
import TakeAway from "./Pages/TakeAway/TakeAway";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <>
  


  <BrowserRouter>
  <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />}  />
        <Route path="/contact" element={  <ContactUs/>} />
        <Route path="/gallery" element={ <GalleryPage/> } />
        <Route path="/takeaway" element={<TakeAway/>} />
        <Route path="/selfcatfood" element={<SelfCateringFood/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
