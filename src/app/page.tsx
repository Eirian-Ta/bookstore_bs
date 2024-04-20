import React from "react";
import BookList from "../app/components/BookList";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="wrapper m-6 p-6 text-center">
      <Header />
      <Link href={"/addBook"}>
        <button className="bg-blue-500 text-white px-6 py-2 m-auto rounded-full">
          Add More Book
        </button>
      </Link>
      <BookList />
    </main>
  );
}
