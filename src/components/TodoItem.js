import React, { useState } from 'react';
import './TodoList.css';

const TodoItem = ({ text, completed, onToggle, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    onEdit(editedText);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      {editing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress} // Додали обробник для Enter
          />
          <button onClick={handleSave}>Зберегти</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
          />
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {text}
          </span>
          <button onClick={handleEdit}>Редагувати</button>
          <button className="delete-button" onClick={onDelete}>X</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
