import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookListData } from "../../app/lib/placeholder-data";
import { Book, BooksState } from "@/app/lib/interfaces";

// Define the initial state
const initialState: BooksState = {
  books: bookListData,
};

// Create a slice for managing books state
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Add a reducer to add a new book
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },
    // Add a reducer to edit an existing book
    editBook(state, action: PayloadAction<Book>) {
      const { id, name, price, category, description } = action.payload;
      const existingBook = state.books.find((book) => book.id === id);
      if (existingBook) {
        existingBook.name = name;
        existingBook.price = price;
        existingBook.category = category;
        existingBook.description = description;
      }
    },
    // Add a reducer to delete a book
    deleteBook(state, action: PayloadAction<number>) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Export the action creators and reducer
export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
