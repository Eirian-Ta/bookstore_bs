"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addBook } from "@/redux/slices/bookSlice";
import Header from "../components/Header";
import { RootState, useSelector } from "@/redux/store";

export default function Page() {
  const router = useRouter();

  const newId = useSelector(
    (state: RootState) => state.books.books.slice(-1)[0].id + 1
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      addBook({
        id: newId,
        name,
        price: parseFloat(price),
        category,
        description,
      })
    );

    router.push("/");
  };

  return (
    <div>
      <Header />
      <h2>Add Book</h2>
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
          type="text"
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
