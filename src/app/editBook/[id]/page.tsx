"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { modifyBook } from "@/redux/slices/bookSlice";
import Header from "@/app/components/Header";
import { RootState } from "../../../redux/store";
import BookForm from "@/app/components/BookForm";

export default function EditBookPage({ params }: { params: { id: number } }) {
  const router = useRouter();
  const book = useSelector((state: RootState) =>
    state.books.books.find((book) => book.id == params.id)
  );

  const dispatch = useDispatch();

  const handleSubmit = (values: {
    name: string;
    price: number;
    category: string;
    description: string;
  }) => {
    if (book) {
      dispatch(modifyBook({ ...book, ...values }));
    }
    router.push("/");
  };

  const initialValues = book
    ? {
        ...book,
      }
    : { name: "", price: 0, category: "", description: "" };

  return (
    <div>
      <Header />
      <h2>Edit Book</h2>
      {book && (
        <BookForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          submitButtonText="Save Changes"
        />
      )}
    </div>
  );
}
