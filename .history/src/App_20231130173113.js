
import React from 'react';
import TodoList from './components/TodoList';
import TextField from "@mui/material/TextField";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

const App = () => {
  return (
    <div>
      <h1>Мій Todo List</h1>
      <TodoList />
    </div>
// чому свариться
    <div className="main"> > 
    <h1>React Search</h1>
    <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
      />
    </div>
    <List input={inputText} />
    </div>
    
  );
};

export default App;



