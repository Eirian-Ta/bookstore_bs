"use client";

import { useSelector } from "react-redux";
import { RootState, dispatch } from "../../redux/store";
import Link from "next/link";
import { deleteBook } from "@/redux/slices/bookSlice";

const BookList = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/editBook/${book.id}`}>
              <span>Name:</span>
              <span> {book.name}</span>
              <span> - Price: </span>
              <span>{book.price} CAD</span>
              <span> - Category: </span>
              <span>{book.category}</span>
              <span> - Description: </span>
              <span>{book.description}</span>
            </Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
