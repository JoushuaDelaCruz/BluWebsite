import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Write = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const getStatus = async () => {
      const res = await axios.get("/admin");
      setIsAdmin(res.data);
    };
    getStatus();
  }, []);

  const newBook = async () => {
    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("description", description);
    await axios.post("/newBook", data).then((res) => {
      if (res.data) {
        console.log("Book added successfully");
      } else {
        console.log("Book not added successfully");
      }
    });
  };

  return (
    <div className="">
      <Header />
      <div className="flex flex-col justify-center items-center my-10 mx-8 gap-3 bg-white">
        <h1 className="text-center"> Story Details </h1>
        <form className="flex flex-col grid-cols-3 md:grid">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className=""
            name="image"
            id="image"
          />
          <div className="flex flex-col justify-center items-center gap-2 col-span-2">
            <section className="w-full">
              <label> Title </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Untitled Book"
                className="w-1/2"
                id="title"
              />
            </section>
            <section className="w-full">
              <label> Description </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder=""
                id="description"
                className="w-full min-h-"
              />
            </section>
          </div>
        </form>
        <input
          type="submit"
          value="Start Writing"
          className="border bg-slate-50 w-1/4"
          onClick={newBook}
        />
      </div>
    </div>
  );
};

export default Write;
