import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, text: "Hello World" }] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i] === action.payload.id) {
          state.todos[i].text = action.payload.text;
        }
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
