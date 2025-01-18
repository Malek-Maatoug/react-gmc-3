import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Form = () => {
  const [users, setUsers] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const { id } = useParams();
  const getUsers = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUsers(res.data);
  };
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    if (id) {
      getUsers();
      if (users) {
        const { userId, body, title } = users;
        setFormData({ userId, body, title });
      }
    }
  }, [users.userId]);

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
    if (id) {
      await axios.patch("http://localhost:3000/users/" + id, formData);
    } else {
      await axios.post("http://localhost:3000/users", formData);
    }
    setFormData({
      userId: "",
      title: "",
      body: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-300 grid gap-8 justify-start p-10"
    >
      <div className="flex flex-col gap-2 w-[500px]">
        <label>User ID:</label>
        <input
          className="rounded-full p-3"
          type="number"
          name="userId"
          placeholder="userId"
          value={formData.userId}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2 w-[500px]">
        <label>Title:</label>
        <input
          placeholder="title"
          className="rounded-full p-3"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2 w-[500px]">
        <label>Body:</label>
        <textarea
          className="rounded-3xl p-4"
          name="body"
          placeholder="body"
          value={formData.body}
          onChange={handleChange}
        />
      </div>
      <button
        className="rounded-full bg-red-500 self-start px-4 py-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
