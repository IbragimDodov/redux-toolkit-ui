import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find(todo => todo.id === action.payload)
      toggleTodo.completed = !toggleTodo.completed
    }
  }
})

export const {addTodo, toggleCompletedTodo} = todoSlice.actions
export default todoSlice.reducer