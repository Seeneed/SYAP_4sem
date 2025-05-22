import React from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/CounterAction';
import { CounterState } from '../redux/CounterTypes';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: CounterState) => state);
    
    return (
        <div className="container">
            <div className="count">
                <span>{count}</span>
            </div>
            <div className="button-container">
                <Button title="increase" callback={() => dispatch(increment())} />
                <Button title="decrease" callback={() => dispatch(decrement())} />
                <Button title="reset" callback={() => dispatch(reset())} />
            </div>
        </div>
    )
}
