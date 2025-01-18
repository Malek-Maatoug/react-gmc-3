import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
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
