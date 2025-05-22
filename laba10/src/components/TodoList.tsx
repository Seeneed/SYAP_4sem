import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Todo } from '../redux/types';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import styles from '../styles/TodoList.module.css';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  return (
    <div className={styles.container}>
        <h1>Список дел (React + TS + Redux Toolkit)</h1> {}
        <AddTodoForm editingTodo={editingTodo} onEditCancel={handleCancelEdit} />
        <ul className={styles.list}>
            {todos.length === 0 ? (
                <p className={styles.emptyMessage}>Задач пока нет...</p>
            ) : (
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onEdit={handleEdit} />
                ))
            )}
        </ul>
    </div>
  );
};

export default TodoList;