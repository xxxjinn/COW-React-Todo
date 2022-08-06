import React from "react";
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

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
        <TodoTemplate>
          <TodoInsert/>
          <TodoList />
        </TodoTemplate>
      </>
  );
}

export default App;
