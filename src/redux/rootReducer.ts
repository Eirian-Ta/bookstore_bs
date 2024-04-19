import { combineReducers } from "redux";

// import slices
import bookSliceReducer from "./slices/bookSlice";

const rootReducer = combineReducers({
  books: bookSliceReducer,
});

export default rootReducer;
