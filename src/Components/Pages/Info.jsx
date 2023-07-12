import React from "react";
import "../Pages/Info.scss";
import people from "../../img/people.jpg";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
const Info = () => {
  return (
    <div>
      <div className="container">
        <div className="O-nas">
          <img src={people} alt="" />
        </div>
        <div className="O-nas-text">
          <h3>Наши преимущества:</h3>
          <ul>
            <li>многолетний опыт работы;</li>
            <li>
              широкий спектр предоставляемых услуг и ассортимент поставляемой
              продукции;
            </li>
            <li>
              безупречное качество реализуемых товаров и предоставляемых услуг;
            </li>
            <li>максимальное удовлетворение потребностей клиентов;</li>
            <li>более 6,000 постоянных клиентов;</li>
            <li>стандарты качества компании;</li>
            <li>гарантии на все виды услуг;</li>
            <li>команда профессионалов любящих общее дело.</li>
          </ul>
        </div>
        <div className="O-nas-text1">
          <h3>Наши главные ценности</h3>
          <ul>
            <li>честность, компетентность, надежность;</li>
            <li>ответственность и преданность делу;</li>
            <li>нацеленность на лучший результат во всем;</li>
            <li>чистые и блестящие автомобили;</li>
            <li>довольные и счастливые клиенты.</li>
          </ul>
        </div>
        <div className="vidio">
          <iframe
            src="https://www.youtube.com/embed/xGYUI5TPREI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default Info;
