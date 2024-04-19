// Define the interface for a single book
export interface Book {
  id: number;
  name: string;
  price: number;
  category: number[];
  description: string;
}

// Define the interface for the books state
export interface BooksState {
  books: Book[];
}