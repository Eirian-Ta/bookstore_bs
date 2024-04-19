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
    modifyBook(state, action: PayloadAction<Book>) {
      const { id, name, price, category, description } = action.payload;
      const existingBookIndex = state.books.findIndex((book) => book.id === id);
      if (existingBookIndex !== -1) {
        state.books[existingBookIndex] = {
          ...state.books[existingBookIndex],
          name,
          price,
          category,
          description,
        };
      }
    },

    // Add a reducer to delete a book
    deleteBook(state, action: PayloadAction<number>) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Export the action creators and reducer
export const { addBook, modifyBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
