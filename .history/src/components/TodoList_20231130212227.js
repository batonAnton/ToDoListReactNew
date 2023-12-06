
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';


const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() => {
    // Отримайте дані з LocalStorage при завантаженні компонента
    const savedData = localStorage.getItem('dataKey');
    if (savedData) {
      setTodos(JSON.parse(savedData));
    }
  }, []);

  const handleTaskUpdate = (taskId, updatedText) => {
    // Знайдіть таск за його ідентифікатором та оновіть текст
    const updatedTasks = todos.map(task => {
      if (task.id === taskId) {
        return { ...task, text: updatedText };
      }
      return task;
    });

    // Оновіть дані і збережіть їх у LocalStorage
    setTodos(updatedTasks);
    localStorage.setItem('dataKey', JSON.stringify(updatedTasks));
  };

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
    const updatedData = todos.filter(todo => todo.id !== id);
    localStorage.setItem('dataKey', JSON.stringify(updatedData));
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText('');

    // Оновіть дані у LocalStorage після додавання нового завдання
    localStorage.setItem('dataKey', JSON.stringify([...todos, newTodo]));
  };

  return (
    <div className="container">
      
      <h2>Список завдань:</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleAddTodo();
            }
          }}
          placeholder="Введіть нове завдання"
        />
        <button onClick={handleAddTodo}>Додати</button>
      </div>
      <div>
        <button className='all-btn' onClick={() => setFilterOption('all')}>Всі</button>
        <div className="dropdown">
          <button className="dropbtn all-btn">Фільтр</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setFilterOption('completed')}>Виконані</a>
            <a href="#" onClick={() => setFilterOption('notCompleted')}>Невиконані</a>
          </div>
        </div>
      </div>
      <ul>
        {todos
          .filter(todo => {
            if (filterOption === 'completed') {
              return todo.completed;
            } else if (filterOption === 'notCompleted') {
              return !todo.completed;
            }
            return true;
          })
          .map(todo => (
            // В компоненті TodoList
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => handleToggle(todo.id)}
          onDelete={() => handleDeleteTodo(todo.id)}
          onEdit={(editedText) => handleTaskUpdate(todo.id, editedText)}
        />

          ))}
      </ul>
    </div>
  );
};

export default TodoList;
