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
      <ul className="flex text-left">
        {books.map((book) => (
          <li
            key={book.id}
            className="wrapper p-6 m-4 flex flex-col justify-between"
          >
            <Link href={`/editBook/${book.id}`}>
              <p>
                <span className="font-bold">Name:</span>
                <span> {book.name}</span>
              </p>
              <p>
                <span className="font-bold">Price: </span>
                <span>{book.price} CAD</span>
              </p>
              <p>
                <span className="font-bold">Category: </span>
                <span>{book.category}</span>
              </p>
              <p>
                <span className="font-bold">Description: </span>
                <span>{book.description}</span>
              </p>
            </Link>
            <button
              className="bg-red-500 text-white px-6 py-2 mt-3 rounded-full"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
