import React from "react";
import "../Contacts/Contacts.scss";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import Slick from "../Slick/Slick";
function Contacts() {
  return (
    <div>
      <div className="container">
        <div className="contac">
          <div className="adres">
            <h3>ФИЛИАЛ TLZ</h3>
            <br />
            <h2>Адрес:</h2>
            <p>
              г. Ташкент Мирзо-Улугбекский р-н, малая кольцевая, Ориентир:{" "}
              <br />
              Ташкентский Лакокрасочный Завод, напротив автосалона <br />{" "}
              AUDI-VOLVO
            </p>
            <h6>Построить маршрут</h6>

            <div className="phone">
              <h3>Телефоны</h3>
              <p>+998 (97) 723-94-49</p>
              <div className="email">
                <h3>Email:</h3>
                <p>car-driver-detailing@yandex.ru</p>
              </div>
            </div>
          </div>
          <div className="adres1">
           
            <h3>ФИЛИАЛ POYTAXT</h3>
            <br />
            <h2>Адрес:</h2>
            <p>
              г. Ташкент Яшнабадский р-н, перекресток ТАПОиЧ, Ориентир: <br />{" "}
              ресторан Шош, АЗС Poytaxt- SUN PETROL, на территории <br />{" "}
              заправочного комплекса.
            </p>
            <h6>Построить маршрут</h6>

            <div className="phone1">
              <h3>Телефоны</h3>
              <p>+998 (93) 002-94-49</p>
              <div className="email1">
                <h3>Email:</h3>
                <p>car-driver-detailing@yandex.ru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Map />
      <Footer />
    </div>
  );
}

export default Contacts;
