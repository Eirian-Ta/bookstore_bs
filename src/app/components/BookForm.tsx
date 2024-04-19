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
      price: parseFloat(price),
      category,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default BookForm;
