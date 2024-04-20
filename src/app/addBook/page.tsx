"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "@/redux/slices/bookSlice";
import Header from "../components/Header";
import { RootState } from "@/redux/store";
import BookForm from "../components/BookForm";

export default function AddBookPage() {
  const router = useRouter();

  const newId = useSelector(
    (state: RootState) => state.books.books.slice(-1)[0].id + 1
  );

  const dispatch = useDispatch();

  const handleSubmit = (values: {
    name: string;
    price: number;
    category: string;
    description: string;
  }) => {
    dispatch(
      addBook({
        id: newId,
        ...values,
      })
    );
    router.push("/");
  };

  return (
    <div>
      <Header />
      <h2 className="text-center font-bold">Add Book</h2>
      <BookForm
        initialValues={{ name: "", price: 0, category: "", description: "" }}
        onSubmit={handleSubmit}
        submitButtonText="Add Book"
      />
    </div>
  );
}
