import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Params/index.scss"

export default function Params() {
  const { title } = useParams();

  const paramArray = [
    {
      id: 0,
      title: title === "zhivye-foto" ? "Живые фото" : "",
    },
    {
      id: 1,
      title: title === "luchshie-foto" ? "Полировка и керамика" : "",
    },
    {
      id: 2,
      title: title === "zhivye-foto-2" ? "Химчистка До и После" : "",
    },
    {
      id: 3,
      title: title === "shumka" ? "Шумоизаляция" : "",
    },
    {
      id: 4,
      title: title === "detaly" ? "Детелинг моторного отсека" : "",
    },
    {
      id: 5,
      title: title === "video" ? "Видео" : "",
    },
    
  ];

  const [Path, setPath] = useState([]);
  useEffect(() => {
    setPath(paramArray);
  }, []);

  if (title) {
    return (
      <div className="Glava">
        <Link to={"/"}>Главная</Link>
        <span>/</span>

        {Path.map((pathName) => {
          const { id, title } = pathName;
          return <span key={id}>{title}</span>;
        })}
      </div>
    );
  }
}
