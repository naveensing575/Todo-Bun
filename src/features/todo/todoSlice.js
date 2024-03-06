import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    title: "Drink water",
    completed: false
  },
  {
    id: 2,
    title: "Eat fruits and vegetables",
    completed: true
  },
  {
    id: 3,
    title: "Go to gym",
    completed: false
  }
]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { title } = action.payload;
      if (title.trim() !== "") {
        const todo = {
          id: nanoid(),
          title,
          completed: false
        };
        state.todos.push(todo);
      } else {
        console.error('Todo title cannot be empty.');
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.completed = action.payload.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    }
  }
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
