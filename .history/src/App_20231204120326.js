import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TextField from "@mui/material/TextField";
import List from './components/list';
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    // конвертація тексту введення до нижнього регістру
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div>
        <h1>Мій Todo List</h1>
        <TodoList />
      </div>

      <div className="main">
        <h1>React Search</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            onChange={inputHandler}
          />
        </div>
        <List input={inputText} />
      </div>
    </>
  );
}

export default App;
