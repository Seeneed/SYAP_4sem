import { createStore } from 'redux';
import { counterReducer } from './CounterReducer';
import { CounterState } from './CounterTypes';

export const store = createStore(counterReducer);

export type AppDispatch = typeof store.dispatch;
