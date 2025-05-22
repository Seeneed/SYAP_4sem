import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types'; 

export interface TodosState {
  todos: Todo[];
  nextId: number; 
}

const initialState: TodosState = {
  todos: [],
  nextId: 1, 
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.nextId++, 
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo); 
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; 
      }
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text; 
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1); 
      }
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
