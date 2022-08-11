import React from "react";
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./TodoContext";
import TodoDate from "./components/Footer";

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
    <TodoProvider>
        <GlobalStyle />
        <header>To Do List</header>
        <TodoTemplate>
          <TodoInsert/>
          <TodoList />
          <TodoDate/>
        </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
