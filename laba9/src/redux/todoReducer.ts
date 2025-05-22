import { Todo } from './types';
import { TodoActionTypes } from './todoActions';
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from './actionTypes';

const initialState: Todo[] = [];

export const todoReducer = (state = initialState, action: TodoActionTypes): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed } 
          : todo
      );

    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text } 
          : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};