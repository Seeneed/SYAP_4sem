import { Todo } from './types';
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from './actionTypes';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo; 
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: { id: number }; 
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: { id: number; text: string }; 
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: { id: number }; 
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | EditTodoAction
  | DeleteTodoAction;

let nextTodoId = 0; 

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId, 
    text,
    completed: false,
  },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const editTodo = (id: number, text: string): EditTodoAction => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: { id },
});