import React from "react";
import "./Servises.scss";
import { Link } from "react-router-dom";
function Servises() {
  return (
    <div className="container">
      <div className="servises">
        <h3>Наши услуги</h3>
        <div className="Salon">
          <h2>Салон</h2>
          <p>
           
            <Link className="need-element" to="/Detaling">
              <i class="fa-solid fa-arrow-right"></i>Детейлинг химчистка салона
            </Link>
          </p>
          <p>
           <Link className="need-element" to="/Expres-cleaning">
            <i class="fa-solid fa-arrow-right"></i>Express химчистка салона
            </Link>
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Аквапринт салона
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Ламинация
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Шумоизоляция
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Школа детейлинга
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Озонирование
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>UPT защита салона
          </p>
        </div>
        <div className="Body">
          <h3>Кузов</h3>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Детейлинг полировка кузова
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Детейлинг моторного отсека
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Атермальная тонировка
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Тонировка
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Антигравийная пленка
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Удаление царапин и сколов
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Нано защита дисков
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Антидождь
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Керамика 9H
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Жидкое стекло
          </p>
          <p>
           
            <i class="fa-solid fa-arrow-right"></i>Удаление вмятин PDR
          </p>
        </div>
        <div className="avtoservises">
          <h3>Автосервис</h3>
          <p>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>3D развал схождения
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>Express замена масла TOTAL
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>Услуги автосервиса
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>Водородная очистка ДВС
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>Индивидуальная расточка
            опорных дисков
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>Финишная балансировка
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>Финишная балансировка
            Заправка кондиционера
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servises;
