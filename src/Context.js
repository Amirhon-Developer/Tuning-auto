import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import Admin from "../src/Components/Post/Admin/Admin/Admin"
const api = "http://127.0.0.1:8000/admin/";
const apiproduct = "http://127.0.0.1:8000/api/admin/delete/";
const Context = createContext();

console.log(apiproduct);

const ContextProvider = ({ children }) => {
  const [mura, setMura] = useState("");
  const [title, SetTitle] = useState();
  const [image, SetImage] = useState();
  const [desc, SetDesc] = useState();
  const [category, SetCategory] = useState();
  const [price, SetPrice] = useState();
  const [data, setData] = useState([]);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  // const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  let logoutClasses = "";

  const LogoutFunc = () => {
    const userAuth = JSON.parse(localStorage.getItem("auth"));
    if (userAuth) {
      logoutClasses += "btn btn-danger";
      console.log(true);
    } else {
      console.log(false);
      logoutClasses = "d-none";
    }
  };
  LogoutFunc();
  const userData = {
    name: name,
    // number: number,
    login: user,
    pass: pass,
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/product/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const PatchElements = async (path, id, data) => {
    await axios
      .patch(`${path}/${id}/`, data)
      .then(() => {
        console.log("patch ok");
      })
      .catch((err) => console.error(err));
  };

  const AdminDelete = async (path, id) => {
    try {
      const res = await axios
        .delete(`${path}/${id}/`)

        .then(() => console.log(id));
      console.log("Object deleted");
    } catch (error) {
      alert(error);
    }
  };

  const CreateDevice = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/product/", {
        title: title,
        image: image,
        desc: desc,
        price: price,
        category: category,
        id: data.length + 1,
      })
      .then((res) => {
        console.log(res.data);
        alert("Object added");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchText = (event) => {
    setMura(event.target.value);
  };

  const dataSearch = data.filter((item) => {
    return item.title.toLowerCase().includes(mura.toLowerCase());
  });

  return (
    <Context.Provider
      value={{
        setData,
        data,
        mura,
        searchText,
        dataSearch,
        api,
        user,
        setUser,
        pass,
        setPass,
        SetTitle,
        userData,
        PatchElements,
        AdminDelete,
        createContext,
        CreateDevice,
        title,
        setData,
        image,
        SetImage,
        price,
        desc,
        SetDesc,
        SetPrice,
        category,
        SetCategory,
        logoutClasses,
        LogoutFunc,
        name,
        setName,
        // number,
        // setNumber
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
