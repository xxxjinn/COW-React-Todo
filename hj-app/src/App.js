import React from "react";
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
<<<<<<< HEAD
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
=======
>>>>>>> 4a2a25b87738d8a6968d6b2000de84f5fdebefda

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  header{
    color: #97B191;
    text-align: center;
    margin-top: 90px;
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 80px;
  }
`;

function App(){
  return(
      <>
        <GlobalStyle />
        <header>To Do List</header>
<<<<<<< HEAD
        <TodoTemplate>
          <TodoInsert/>
          <TodoList />
        </TodoTemplate>
=======
        <TodoTemplate>Todolist 박스</TodoTemplate>
>>>>>>> 4a2a25b87738d8a6968d6b2000de84f5fdebefda
      </>
  );
}

export default App;
