// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detailling() {
  const { id } = useParams();
  const [DataObj, setDataObj] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/product/`).then((data) => {
      data.data.forEach((element) => {
        if (Number(id) === element.id) {
          setDataObj(element);
        }
      });
    });
  }, []);

  console.log(DataObj);
  return (
    <>
    <div>
      <div className="container">
        <h2 className="display-3">{DataObj.title}</h2>
        <img src={DataObj.img} alt="error" />

        <p>
          {
            DataObj.description

          }
        </p>
      </div>
    </div>

    </>
  
  )
}
