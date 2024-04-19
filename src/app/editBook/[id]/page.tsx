"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { modifyBook } from "@/redux/slices/bookSlice";

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const book = useSelector((state: RootState) =>
    state.books.books.find((book) => book.id == params.id)
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (book) {
      setName(book.name);
      setPrice(book.price.toString());
      setCategory(book.category);
      setDescription(book.description);
    }
  }, [book]);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(book, name, price, category, description);
    if (book) {
      dispatch(
        modifyBook({
          ...book,
          name,
          price: parseFloat(price),
          category,
          description,
        })
      );
    }
    router.push("/");
  };

  return (
    <div>
      <h2>
        Edit: Book {name} {params.id}
      </h2>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
