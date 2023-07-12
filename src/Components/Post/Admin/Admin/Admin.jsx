import React, { useContext, useState } from "react";
import { Context } from "../../../../Context";
import "../Admin/Admin.scss";

const Admin = () => {
  const [patchObj, setPatchObj] = useState({});
  const {
    data,
    PatchElements,
    AdminDelete,
    createContext,
    CreateDevice,
    title,
    setData,
    image,
    SetImage,
    price,
    SetTitle,
    desc,
    SetDesc,
    SetPrice,
    category,
    SetCategory,
  } = useContext(Context);

  const PatchData = (data) => {
    const item = {
      id: data.id,
      title: data.title,
      img: data.img,
      description: data.description,
      price: data.price,
    };
    setPatchObj(item);
  };

  console.log(patchObj);
  return (
    <div className="container">
      <div className="ooooo">
        <h1 className="ooooo__h1">ADMIN PANEL</h1>

        <div className="registr">
          <input
            value={title}
            onChange={(e) => SetTitle(e.target.value)}
            placeholder="Title"
            type="text"
            className="registr__input"
          />
          <input
            value={image}
            onChange={(e) => SetImage(e.target.value)}
            placeholder="Image"
            type="text"
            className="registr__input"
          />
          <input
            value={desc}
            onChange={(e) => SetDesc(e.target.value)}
            placeholder="Description"
            type="text"
            className="registr__input"
          />
          <input
            value={price}
            onChange={(e) => SetPrice(e.target.value)}
            placeholder="Price"
            type="number"
            className="registr__input"
          />
          {/* <input
            value={category}
            onChange={(e) => SetCategory(e.target.value)}
            placeholder="Category"
            type="text"
            className="registr__input"
          /> */}
          <button className="register__btn" onClick={CreateDevice}>
            Create
          </button>
        </div>
        <div className="h12">
          <h1>Изменения Админ панеля</h1>
        </div>

        <div className="registr-izmeneniya">
          <input
            value={patchObj.title}
            onChange={(e) =>
              setPatchObj({ ...patchObj, title: e.target.value })
            }
            placeholder="Title"
            type="text"
            className="registr__input"
          />
          <input
            value={patchObj.img}
            onChange={(e) => setPatchObj({ ...patchObj, img: e.target.value })}
            placeholder="Image"
            type="text"
            className="registr__input"
          />
          <input
            value={patchObj.description}
            onChange={(e) =>
              setPatchObj({ ...patchObj, description: e.target.value })
            }
            placeholder="Description"
            type="text"
            className="registr__input"
          />
          <input
            value={patchObj.price}
            onChange={(e) =>
              setPatchObj({ ...patchObj, price: e.target.value })
            }
            placeholder="Price"
            type="number"
            className="registr__input"
          />
          <button className="register__btn" onClick={()=> PatchElements("http://127.0.0.1:8000/api/product", patchObj.id, patchObj)}>
            Create
          </button>
        </div>
      </div>
      <div className="maped">
        {data.map((el) => {
          return (
            <div className="salom">
              <div className="cardPlants" key={el._id}>
                <img className="cardPlants__img" src={el.image} alt="" />
                <div className="ggg">
                  <h1 className="cardPlants__h1">{el.title}</h1>
                  <p className="cardPlants__p">{el.desc}</p>
                  <div className="prices">
                    <p className="prices__1">{el.price} $</p>
                  </div>
                  <div className="ggg__btns">
                    <button
                      onClick={() =>
                        // PatchElements(
                        //   "http://127.0.0.1:8000/api/product",
                        //   el.id
                        // )
                        PatchData(el)
                      }
                      className="price__btn1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() =>
                        AdminDelete(
                          "http://127.0.0.1:8000/api/admin/delete",
                          el.id
                        )
                      }
                      className="price__btn1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
