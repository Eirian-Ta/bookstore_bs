"use client";

import React, { useState } from "react";
import { BookFormProps } from "../lib/interfaces";

const BookForm = ({
  initialValues,
  onSubmit,
  submitButtonText,
}: BookFormProps) => {
  const [name, setName] = useState(initialValues.name);
  const [price, setPrice] = useState(initialValues.price);
  const [category, setCategory] = useState(initialValues.category);
  const [description, setDescription] = useState(initialValues.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      price,
      category,
      description,
    });
  };

  return (
    <form className="wrapper m-6 p-6" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col my-2">
        <label htmlFor="name">Name:</label>
        <input
          className="flex-grow px-2"
          type="text"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex">
        <div className="w-1/3 flex flex-col my-2 mr-6">
          <label htmlFor="price">Price:</label>
          <input
            className="flex-grow px-2"
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex my-2 flex-grow flex-col">
          <label htmlFor="category">Category:</label>
          <input
            className="flex-grow px-2"
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col my-2">
        <label htmlFor="description">Description:</label>
        <textarea
          className="flex-grow px-2"
          name="description"
          value={description}
          rows={4}
          maxLength={900}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-6 py-2 mt-3 rounded-full"
        type="submit"
      >
        {submitButtonText}
      </button>
    </form>
  );
};

export default BookForm;
