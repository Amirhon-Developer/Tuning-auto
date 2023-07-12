import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import Servises from "./Components/Home/Servises/Servises";
import TelegramBot from "./Components/TelegramBot/TelegramBot";
import Our from "./Our";
import Slick from "./Components/Slick/Slick";
import Map from "./Components/Map/Map";
// import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Info from "./Components/Pages/Info";
import Contacts from "./Components/Contacts/Contacts";
import Portfolio from "./Components/Portfolio/Portfolio";
import Detaling from "./Components/Componets1/Detaling";
import Express from "./Components/Componets1/Expres-cleaning";
import SinglePage from "./Components/Portfolio/SinglePage";
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";
import Admin from "../src/Components/Post/Admin/Admin/Admin"
import Page from "./Components/SinglePage/Page";
import Onlayn from "./Components/SinglePage/Onlayn";
import Detailling from "./page/detailling";
import NotFound from "./page/notfound";
import Login_admin from "./Components/Post/Admin/Admin/Admin_panel_parol";
import Delete from "../src/Components/Post/Admin/Admin/Delete"
import Icon_page from "./Components/Icon_page/Icon_page";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/telegramBot" element={<TelegramBot />} />
        <Route path="/our" element={<Our />} />
        <Route path="/slick" element={<Slick />} />
        <Route path="/map" element={<Map />} />
        <Route path="/page" element={<Page/>} />
        <Route path="/onlayn" element={<Onlayn/>} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:title" element={ <SinglePage /> } />
        <Route path="/detaling" element={<Detaling />} />
        <Route path="/express" element={<Express />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/delete" element={<Delete />} /> */}
        <Route path="/detailling/:id" element={ <Detailling /> } />
        <Route path="*" element={ <NotFound /> } />
        <Route path="/login_admin" element={ <Login_admin /> } />
        {/* <Route path="/delete" element={ <Delete /> } /> */}
        <Route path="/img_page" element={ <Icon_page /> } />
      </Routes>
    </div>
  );
}

export default App;
