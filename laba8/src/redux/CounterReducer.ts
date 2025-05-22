import { CounterState, CounterActionTypes, INCREMENT, DECREMENT, RESET } from './CounterTypes';

const initialState: CounterState = 0;

export const counterReducer = (
  state: CounterState = initialState, 
  action: CounterActionTypes
): CounterState => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};
