import React from "react";
import styled from "styled-components";
import plus from "../src/img/pluse.svg";
const Our = () => {
  return (
    <Section id="about">
      <div className="container">
        <div
          id="row"
          className="row d-flex justify-content-between align-items-center"
        >
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Сколько стоит тонировка в Ташкенте?
                    <div className="pluse"></div>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Итоговая стоимость зависит от класса автомобиля. Стоимость
                      тонировки начинается от 200 000 сум.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Где можно получить разрешение на тонировку в Узбекистане?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Разрешение на установку тонировки на передние боковые
                      стекла машин можно получить онлайн на портале ЕПИГУ
                      (my.gov.uz) и в подразделениях безопасности дорожного
                      движения органов внутренних дел.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Сколько стоит получить разрешение на тонировку в
                    Узбекистане?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Заднее лобовое и задние боковые стекла разрешается
                      тонировать до 100% бесплатно. Стоимость разрешения
                      наустановку тонировки на передние боковые стёкла машин для
                      физических и юридических лиц — 2,4 млн (8 БРВ).
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Где тонировать стекла в Ташкенте?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Вы можете обратиться в автосервис и детейлинг студию
                      Driver. Мы сможешь вам помочь с выбором пленки,
                      проконсультировать и качественно ее наклеить.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Какие штрафы за тонировку стекол без разрешения?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      7 500 000 сумов (25 БРВ) — штраф за езду с тонированными
                      стеклами в Узбекистане, не имея соответствующего
                      разрешения. После оформления штрафа за тонировку, машина
                      отправляется на штрафстоянку до полного устранения причины
                      задержания.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.div`
.accordion{
  width: 100% !important;
}
  padding: 5em 0;
  h5 {
    margin: 0 0 0 0.5em;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 51px;
    display: flex;
    align-items: center;
    color: #171717;
  }
  .accordion-item {
    border-left: none;
    border-right: none;
  }
  .accordion-header {
    width: 100% !importdant;
    button {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 32px;
      line-height: 39px;
      display: flex;
      align-items: center !important;
      color: #171717;
      box-shadow: none !important;
    }
  }
  .accordion-body {
    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px !important;
      display: flex;
      line-height: 135%;
      color: #7d7d7d;
      align-items: center;
    }
  }
  .accordion-button::after {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;
    content: "";
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform 0.2s ease-in-out;
  }
  .accordion-button:not(.collapsed) {
    background-color: white !important;
  }
  .accordion-button:not(.collapsed)::after {
    background: yellow;
    width: 30px;
    height: 2px;
    transform: rotate(180deg);
  }
  /* Media для телефона */
  @media screen and (max-width: 376px) {
   .accordion-header 
    padding: 1em 0;
    h5 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 39px;
      display: flex;
      align-items: center !important;
      color: #171717;
    }
    .bac {
      margin-top: 1.5em;
    }
  }
  /* media для iPad */
  @media screen and (max-width: 415px) {
    padding: 1em 0;
    h5 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 39px;
      display: flex;
      align-items: center !important;
      color: #171717;
    }
    h1 {
      /* font-family: Inter;
            font-style: normal; */
      font-weight: 500;
      font-size: 24px;
      line-height: 110%;
      color: #171717;
    }
    .sistem {
      margin: 0 0 0 15px;
    }
    .lyrics {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 135%;
      color: #7d7d7d;
    }
    .bac {
      margin: 1.5em 0;
      text-align: center;
    }
  }
  @media screen and (max-width: 1077px) {
    padding: 2em 0;
    #row {
      display: block !important;
      width: 100% !important;
    }
    .bac {
      margin: 1.5em auto;
      text-align: center;
    }
  }
  @media screen and (max-width: 475px) {
    .accordion-header {
      button {
        outline: none !important;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 39px;
        display: flex;
        align-items: center !important;
        color: #171717;
        color: black;
      }
    }
    .accordion-body {
      p {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 15px !important;
        display: flex;
        line-height: 135%;
        color: #7d7d7d;
        align-items: center;
      }
    }
    .bac {
      width: 100%;
      padding: 0;
    }
  }
`;
export default Our;
