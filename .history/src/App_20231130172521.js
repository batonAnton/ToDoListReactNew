
import React from 'react';
import TodoList from './components/TodoList';
import TextField from "@mui/material/TextField";
import "./App.css";

const App = () => {
  return (
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
      />
    </div>
    <List />
    </div>
    
  );
};

export default App;



