import React from "react";
import BookList from "../app/components/BookList";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <Link href={"/addBook"}>
        <button>Add More Book</button>
      </Link>
      <BookList />
    </main>
  );
}
