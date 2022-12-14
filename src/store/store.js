import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import userSlice from "../features/user/userSlice";
import postSlice from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice,
  },
})