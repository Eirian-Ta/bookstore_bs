// Define the interface for a single book
export interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

// Define the interface for the books state
export interface BooksState {
  books: Book[];
}

// Define the interface for the book from
export interface BookFormProps {
  initialValues: {
    name: string;
    price: string;
    category: string;
    description: string;
  };
  onSubmit: (values: {
    name: string;
    price: number;
    category: string;
    description: string;
  }) => void;
  submitButtonText: string;
}
