import React from "react";
import "../Icon_page/Icon_page.scss";
import Map from "../Map/Map"
import Footer from"../Footer/Footer"
import Our from "./../../Our"
function Icon_page() {
  return (
    <div>
    <div className="backgraund">
    <div className="container">
      <div className="icon_page">
        <h3>
          ДЕТЕЙЛИНГ СТУДИЯ
          <br />И АВТОСЕРВИС В ТАШКЕНТЕ
        </h3>
      </div>
      <div className="detali">
        Детейлинг — это целый комплекс мероприятий по подготовке автомобиля:
        качественная химчистка салона, тщательная мойка кузова, полировка и
        обработка специальными составами
        
      </div>
      <div>
      
      </div>
      

    
    <div>
      
    </div>
    </div>
    </div>
    <div className="vidio-1">
          <iframe
            src="https://www.youtube.com/embed/xGYUI5TPREI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        
    <Our/>
    <Map/>
    <Footer/>
    </div>
    
  );
}

export default Icon_page;
