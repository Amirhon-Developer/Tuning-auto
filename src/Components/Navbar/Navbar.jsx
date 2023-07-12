import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const NavBurgerFunc = () => {
    setBurger((burger) => !burger);
  };
  return (
    <React.Fragment>
      <div
        className={`modal align-items-center justify-content-center ${
          burger ? "d-flex" : ""
        }`}
      >
        <div className="modal-wrap">
          <ul type="none" className="nav-list">
            <li>
              <Link to="/">НАШИ УСЛУГИ</Link>
            </li>
            <li>
              <Link to="/info">О СЕРВИСЕ</Link>
            </li>
            <li>
              <Link to="/Portfolio">ПОРТФОЛИО</Link>
            </li>
            <li>
              <Link to="/Page">ОНЛАЙН-МАГАЗИН</Link>
            </li>
            <li>
              <Link to="/Contacts">КОНТАКТЫ</Link>
            </li>
          </ul>

          <p>
            <i class="fa-solid fa-phone"></i>+998(97)7507103
          </p>
          <div className="modal-socials d-flex align-items-centre justify-content-between">
            <p>
              <Link to="/Registration"><i class="fa-solid fa-right-to-bracket"></i></Link>
              
            
            </p>
            <p>
              <a href="https://www.facebook.com/people/%D0%A1ar-driver-detailing/100067617018705/">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/car_driver_detailing/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </p>
            <p>
              <a href="https://t.me/car_driver">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar--mobile">
        <div className="container">
          <div className="logo">
            <img
              src="https://car-driver.uz/wp-content/themes/auto/assets/images/logo.svg"
              alt=""
            />
          </div>
          <div className="burger-icon" onClick={NavBurgerFunc}>
            <div className={`burger ${burger ? "close" : ""}`}></div>
          </div>
        </div>
      </nav>
      <div className="navbar navbar--desktop">
        
        <div className="container">
        
          <div className="Nav">
          <Link to="/img_page">
            <img
              src="https://car-driver.uz/wp-content/themes/auto/assets/images/logo.svg"
              alt=""
            />
            </Link>
            
            <div className="page">
              
              <ul>
                <li>
                  <Link to="/">НАШИ УСЛУГИ</Link>
                </li>
                <li>
                  <Link to="/info">О СЕРВИСЕ</Link>
                </li>
                <li>
                  <Link to="/Portfolio">ПОРТФОЛИО</Link>
                </li>
                <li>
                  <Link to="/Page">ОНЛАЙН-МАГАЗИН</Link>
                </li>
                <li>
                  <Link to="/Contacts">КОНТАКТЫ</Link>
                </li>
              </ul>
            </div>
            <div className="contacts">
              <p>
                <i class="fa-solid fa-phone"></i>+998(97)7507103
              </p>
              <p>
              <Link to="/Registration"><i class="fa-solid fa-right-to-bracket"></i></Link>
              </p>
              <p>
                <a href="https://www.facebook.com/people/%D0%A1ar-driver-detailing/100067617018705/">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/car_driver_detailing/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </p>
              <p>
                <a href="https://t.me/car_driver">
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </p>
            </div>
          </div>

          
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Navbar;
