import React, { useState } from "react";
import "../Portfolio/Portfolio.scss";
import ModalImage from "./modal-image";
import "../Portfolio/modal-image.css";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <React.Fragment>
      <div className="custom">
        <div className="container">
          <div className="Link_foto">
            <Link to={"/portfolio/zhivye-foto"} className="custom__link">
              <ModalImage
                src={
                  "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6644-560x307.jpg"
                }
                alt={`This is one of beautiful girls`}
                ratio={`3:2`}
              />
            </Link>
            <Link to={"/portfolio/luchshie-foto"} className="custom__link">
              <ModalImage
                src={
                  "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-09-04_13-02-03-2-560x307.jpg"
                }
                alt={`This is one of beautiful girls`}
                ratio={`3:2`}
              />
            </Link>
          </div>
          <div className="Link_foto2">
            <Link to={"/portfolio/zhivye-foto-2"} className="custom__link">
              <ModalImage
                src={
                  "https://car-driver.uz/wp-content/uploads/2019/06/photo_2019-02-28_18-50-19-560x307.jpg"
                }
                alt={`This is one of beautiful girls`}
                ratio={`3:2`}
              />
            </Link>
            <Link to={"/portfolio/shumka"} className="custom__link">
              <ModalImage
                src={
                  "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-11-17_13-01-46-2-560x307.jpg"
                }
                alt={`This is one of beautiful girls`}
                ratio={`3:2`}
              />
            </Link>
            
          </div>
          <div className="Link_foto3">
          <Link to={"/portfolio/detaly"} className="custom__link">
              <ModalImage
                src={
                  "https://car-driver.uz/wp-content/uploads/2019/06/polotno74-560x307.jpeg"
                }
                alt={`This is one of beautiful girls`}
                ratio={`3:2`}
              />
            </Link>
            <Link to={"/portfolio/video"} className="custom__link">
              <ModalImage
                src={
                  "https://car-driver.uz/wp-content/uploads/2021/03/logotip-768x423.jpg"
                }
                alt={`This is one of beautiful girls`}
                ratio={`3:2`}
              />
            </Link>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
