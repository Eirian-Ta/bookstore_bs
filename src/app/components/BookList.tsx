"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Link from "next/link";

const BookList = () => {
  const books = useSelector((state: RootState) => state.books.books);

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
              <span> - Categories: </span>
              <span>{book.category}</span>
              <span> - Description: </span>
              <span>{book.description}</span>
            </Link>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
