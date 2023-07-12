import React from "react";
import "./portfolio-modal.scss";
/*
position: sticky;
    top: 0;
    left: 0;
    right: 0;

background-color: rgba(30,30,30,.7);
*/
export default function PortfolioModal({click}) {

    // const {handleIcon, setHandleIcon} = useState(false)
    // const HandleFunc = () => setHandleIcon(handleIcon => !handleIcon)
  return (
    <React.Fragment>
      <div className="PortfolioModal">
        <div className="PortfolioModal__imgholder">
          <img
            src="https://car-driver.uz/wp-content/uploads/2022/11/3e5a6648-760x507.jpg"
            alt="error"
          />
        </div>
        <div className="PortfolioModal__mask">
          <i className="icon" onClick={click} ></i>
        </div>
      </div>

      
    </React.Fragment>
  );
}
