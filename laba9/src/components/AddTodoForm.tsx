import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../redux/todoActions';
import { AppDispatch } from '../redux/store';
import { Todo } from '../redux/types';
import styles from '../styles/AddTodoForm.module.css';

interface AddTodoFormProps {
  editingTodo: Todo | null;
  onEditCancel: () => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ editingTodo, onEditCancel }) => {
  const [text, setText] = useState('');
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    } else {
      setText('');
    }
  }, [editingTodo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return; 

    if (editingTodo) {
      dispatch(editTodo(editingTodo.id, trimmedText));
      onEditCancel();
    } else {
      dispatch(addTodo(trimmedText));
    }
    setText(''); 
  }, [text, dispatch, editingTodo, onEditCancel]);

  const handleCancel = () => {
      onEditCancel();
      setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={editingTodo ? "Редактировать задачу..." : "Добавить новую задачу..."}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        {editingTodo ? 'Обновить' : 'Добавить'}
      </button>
      {editingTodo && (
        <button type="button" onClick={handleCancel} className={`${styles.button} ${styles.cancelButton}`}>
          Отмена
        </button>
      )}
    </form>
  );
};

export default AddTodoForm;