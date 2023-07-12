import React from "react";
import "../SinglePage/Page.scss";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

function Page() {
  return (
    <div className="Glava">
      <div className="container">
        <Link to="/onlayn">
          <button className="btn-pereyti">перейти к товарам</button>
        </Link>
      </div>
      <Map />
    <Footer />
    </div>
    
  );
}

export default Page;
