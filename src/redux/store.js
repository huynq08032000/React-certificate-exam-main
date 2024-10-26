import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./reducers/QuestionSlice";

const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
  },
});
export default store;
