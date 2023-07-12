import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalImage from "./modal-image";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import Params from "../Params";

export const dataPortfolio = [
  //zhivye-foto
  {
    id: 0,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6648-760x507.jpg",
  },
  {
    id: 1,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6665-760x507.jpg",
  },
  {
    id: 2,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6647-760x507.jpg",
  },
  {
    id: 3,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6641-760x507.jpg",
  },
  {
    id: 4,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6638-760x507.jpg",
  },
  {
    id: 5,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6644-760x507.jpg",
  },
  {
    id: 6,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6618-760x507.jpg",
  },
  {
    id: 7,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2022/11/3e5a6684-760x507.jpg",
  },
  {
    id: 8,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_17-41-01-2-760x507.jpg",
  },
  {
    id: 9,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_14-33-25-760x507.jpg",
  },
  {
    id: 10,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/img_8171-760x507.jpg",
  },
  {
    id: 11,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/img_8185-760x507.jpg",
  },
  {
    id: 12,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-15_14-53-51-760x507.jpg",
  },
  {
    id: 13,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https:car-driver.uz/wp-content/uploads/2021/05/photo_2020-09-04_13-02-03-2-760x507.jpg",
  },
  {
    id: 14,
    category: "zhivye-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-15_14-56-12-760x507.jpg",
  },
  //luchshie-foto
  {
    id: 15,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/img_7958-760x507.jpg",
  },
  {
    id: 16,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/img_7955-760x507.jpg",
  },
  {
    id: 17,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/img_79461-760x507.jpg",
  },
  {
    id: 18,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_19-57-05-760x507.jpg",
  },
  {
    id: 19,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_17-41-02-4-760x507.jpg",
  },
  {
    id: 20,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_17-41-02-3-760x507.jpg",
  },
  {
    id: 21,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_17-41-01-760x507.jpg",
  },
  {
    id: 22,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_17-41-01-2-760x507.jpg",
  },
  {
    id: 23,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-15_14-33-25-760x507.jpg",
  },
  {
    id: 24,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-08_16-54-29-760x507.jpg",
  },
  {
    id: 25,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-05-04_17-13-37-760x507.jpg",
  },
  {
    id: 26,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-04-10_13-31-53-760x507.jpg",
  },
  {
    id: 27,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-04-07_17-46-52-760x507.jpg",
  },
  {
    id: 28,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-03-28_10-38-56-760x507.jpg",
  },
  {
    id: 29,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-15_14-54-06-760x507.jpg",
  },
  {
    id: 30,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-10_09-37-02-760x507.jpg",
  },
  {
    id: 31,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-08_21-31-08-2-760x507.jpg",
  },
  {
    id: 32,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-09_09-14-16-760x507.jpg",
  },
  {
    id: 33,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-09-04_13-02-03-3-760x507.jpg",
  },
  {
    id: 34,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-09-04_13-02-03-760x507.jpg",
  },
  {
    id: 35,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-09-04_13-02-04-760x507.jpg",
  },
  {
    id: 36,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-09-04_13-02-02-760x507.jpg",
  },
  {
    id: 37,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-09-04_13-02-01-3-760x507.jpg",
  },
  {
    id: 38,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/photo_2022-02-03_13-50-39-2-760x507.jpg",
  },
  {
    id: 39,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/img_20210807_181213-760x507.jpg",
  },
  {
    id: 40,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/img_20210801_175247-760x507.jpg",
  },
  {
    id: 41,
    category: "luchshie-foto",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/img_20210801_175224-760x507.jpg",
  },

  //zhivye-foto-2
  {
    id: 42,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/photo_2019-02-28_18-50-19-760x507.jpg",
  },
  {
    id: 43,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/photo_2018-11-08_13-50-19-760x507.jpg",
  },
  {
    id: 44,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/photo_2018-11-08_13-50-23-760x507.jpg",
  },
  {
    id: 45,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/photo_2019-02-13_10-41-59-760x507.jpg",
  },
  {
    id: 46,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/photo_2019-02-28_18-45-23-760x507.jpg",
  },
  {
    id: 47,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190719_223007-760x507.jpg",
  },
  {
    id: 48,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190711_134319-760x507.jpg",
  },
  {
    id: 49,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/photo_2019-02-28_18-45-28-760x507.jpg",
  },
  {
    id: 50,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190711_134234-760x507.jpg",
  },
  {
    id: 51,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190711_124341-760x507.jpg",
  },
  {
    id: 52,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190711_124327-760x507.jpg",
  },
  {
    id: 53,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190621_102050-760x507.jpg",
  },
  {
    id: 54,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190621_102039-760x507.jpg",
  },
  {
    id: 55,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/5255760362563811488_121-760x507.jpg",
  },
  {
    id: 55,
    category: "zhivye-foto-2",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/07/IMG_20190621_102115-760x507.jpg",
  },

  //SHUMKA
  {
    id: 56,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-02-27_18-06-44-760x507.jpg",
  },
  {
    id: 57,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-03-28_10-31-36-760x507.jpg",
  },
  {
    id: 58,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-03-28_10-31-44-760x507.jpg",
  },
  {
    id: 59,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-03-28_10-31-51-760x507.jpg",
  },
  {
    id: 60,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-11-17_13-01-46-2-760x507.jpg",
  },
  {
    id: 61,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-11-17_13-01-46-3-760x507.jpg",
  },
  {
    id: 62,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-05-24_18-16-45-760x507.jpg",
  },
  {
    id: 63,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-05-24_18-16-46-760x507.jpg",
  },
  {
    id: 64,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-17_11-27-59-760x507.jpg",
  },
  {
    id: 65,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_10-59-29-760x507.jpg",
  },
  {
    id: 66,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-04-28_16-00-21-760x507.jpg",
  },
  {
    id: 67,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_11-31-46-760x507.jpg",
  },
  {
    id: 68,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_10-59-45-760x507.jpg",
  },
  {
    id: 69,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-04-27_11-32-29-760x507.jpg",
  },
  {
    id: 70,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_11-43-08-760x507.jpg",
  },
  {
    id: 71,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_11-43-23-760x507.jpg",
  },
  {
    id: 72,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_11-31-46-760x507.jpg",
  },
  {
    id: 73,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_11-43-58-760x507.jpg",
  },
  {
    id: 74,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_11-45-04-760x507.jpg",
  },
  {
    id: 75,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-09-18_11-52-20-760x507.jpg",
  },
  {
    id: 76,
    category: "shumka",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/11/photo_2021-06-22_19-37-38-760x507.jpg",
  },
  //detaly
  {
    id: 77,
    category: "detaly",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-02-01_10-46-52-760x507.jpg",
  },
  {
    id: 78,
    category: "detaly",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-02-01_10-46-28-760x507.jpg",
  },
  {
    id: 79,
    category: "detaly",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2021-02-01_10-43-51-760x507.jpg",
  },
  {
    id: 80,
    category: "detaly",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-15_14-56-12-760x507.jpg",
  },
  {
    id: 81,
    category: "detaly",
    imageTitle: "This is one of beautiful girls",
    url: "https://car-driver.uz/wp-content/uploads/2019/06/polotno74-760x507.jpeg",
  },
];

export default function SinglePage() {
  const { title } = useParams();

  const [PortfolioParams, setPortfolioParams] = useState([]);

  let category = dataPortfolio.filter(
    (category) => category.category === title
  );

  useEffect(() => {
    setPortfolioParams(category);
  }, []);

  return (
    <React.Fragment>
      <Params />

      <div className="fade-up">
        <div className="container">
          <div className="cards">
            {PortfolioParams.map((portfolio) => {
              const { id, category, imageTitle, url } = portfolio;

              return (
                <React.Fragment key={id}>
                  <ModalImage src={url} alt={imageTitle} ratio={`3:2`} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <Map />
        <Footer />
      </div>
    </React.Fragment>
  );
}
