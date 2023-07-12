import React from "react";
import "../TelegramBot/TelegramBot.scss";
function TelegramBot() {
  return (
    <div className="container">
      <div className="napisat-telegram">
        <h2>
          НУЖНА ТОНИРОВКА
          <br />
          АВТОМОБИЛЯ?
        </h2>
        <h1>
          <br />
          Напишите нам и получите БЕСПЛАТНУЮ консультацию!
          <br />
          Наши мастера готовы решить ваши проблемы в короткий срок
        </h1>
        <br />
        <div className="number" >
          <a href="https://t.me/gembabobot" target="_blank">Написать в телеграм</a>
          <p>или звоните +998977507103</p>
        </div>
        
      </div>
    </div>
  );
}

export default TelegramBot;
