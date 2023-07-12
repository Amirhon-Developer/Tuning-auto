import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../../../../Context";

const AdminUD = () => {
  const { data, category, AdminDelete } = useContext(Context);

  const [imageEdit, setImageEdit] = useState();
  const [videoEdit, setVideoEdit] = useState();
  const [titleEdit, setTitleEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [hoursEdit, setHoursEdit] = useState("");

  // Admin Delete
  // const AdminDelete = async (id) => {
  //   try {
  //     const res = await axios
  //       .delete(`http://127.0.0.1:8000/api/product/${id}/`)
  //       .then(() => console.log(res));
  //     console.log("Data Deleted", res);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // Admin Delete end

  // Edit Post
  const EditPost = async (id) => {
    try {
      const res = await axios
        .patch(`http://127.0.0.1:8000/api/product${id}/`, {
          image: imageEdit,

          title: titleEdit,
          description: descriptionEdit,
          hours: hoursEdit,
        })
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };
  // Edit Post end
  return (
    <>
      {/* inputs */}
      <div className="users bg">
        <h1 className="h1"> ozgartirish </h1>
        <div className="qw1">
          <h6>image</h6>
          <input
            className="inputss"
            onChange={(e) => {
              setImageEdit(e.target.value);
            }}
            value={imageEdit}
            type="file"
            id="inputs"
          />
        </div>
        <div className="qw3">
          <h6>title</h6>
          <input
            className="inputs"
            type="text"
            onChange={(e) => setTitleEdit(e.target.value)}
            value={titleEdit}
            id="inputs"
          />
        </div>

        <div className="qw4">
          <h6>description</h6>
          <input
            className="inputs"
            type="text"
            onChange={(e) => setDescriptionEdit(e.target.value)}
            value={descriptionEdit}
            id="inputs"
          />
        </div>
      </div>

      {/* inputs end*/}
      <div className="bg">
        <div className="containerr ">
          <div className="header">
            {data.map((el, i) => {
              return (
                <div className="obshi" key={el.id}>
                  <div className="cardds" key={el.id}>
                    <div className="img">
                      <img src={el.image} className="card-img-top" alt="" />
                    </div>
                    <div className="text">
                      <h5 className="card-title">{el.title}</h5>
                      <p className="card-price">{el.hours}</p>
                    </div>

                    <div className="foot">
                      <button
                        onClick={() => EditPost(el.id)}
                        className="editbtn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          AdminDelete("http://127.0.0.1:8000/api/admin/delete", el.id);
                          // console.log(el.id);
                        }}
                        className="deletebtn ms-5"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminUD;
