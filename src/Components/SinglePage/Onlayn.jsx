import React, { useEffect, useState } from "react";
import "../SinglePage/Onlayn.scss";
import axios from "axios";
import { Link } from "react-router-dom";
function Onlayn() {
  const [tovars, setTovars] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/product/").then((res) => {
      setTovars(res.data);
      console.log(tovars)
    });
  }, []);

  return (
    <div className="Glava-onlayn">
      <div className="container">
        <div className="logo-1">
          <img
            className="logo-imge"
            src="https://car-driver.uz/wp-content/themes/auto/assets/images/logo.svg"
            alt=""
          />
          <div className="inp">
            <input type="text" placeholder="Поиск по названию" />
          </div>

          <div className="select">
            <select>
              <option value="0">--Все товары--</option>
              <option value="1">Кузов</option>
              <option value="2">Салон</option>
              <option value="3">Спец Предложения</option>
            </select>
          </div>
          <div className="tovars1">
            {tovars.map((tovar) => {
              return (
                <Link to={`/detailling/${tovar.id}`} className="tovar__link">
                  <div className="tovar">
                    <img
                      src="https://taplink.st/a/1/9/7/9/6969f6.png?6"
                      alt=""
                      className="logo-tovar"
                    />
                    <img src={tovar.img} alt="error" className="cobalt" />
                    <div className="sadas">
                      <h1> {tovar.title} </h1>
                      
                      <h3>
                        {tovar.description?.length > 15
                          ? tovar.description.substr(0, 14) + "..."
                          : tovar.description}
                      </h3>
                      <p>APT D-H 01</p>
                      <h4>1 300 000сум</h4>
                      
                    </div>
                    
                  </div>
                  
                </Link>
                
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onlayn;
