import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState, useTodoNextId } from "../TodoContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const TodoListBox = styled.div`
    flex:1;
    padding: 120px 32px;
    padding-bottom: 40px;
    overflow-y: auto;
`;

function TodoList(){
  const todos = useTodoState();
  const nextId = useTodoNextId();
  const [items, setItems] = useState();

  useEffect(()=>{
    axios.get("http://localhost:5000/todo").then(function(response){
      setItems(response.data);
      console.log("Showing Success");
    })
    .catch(function(error){
      console.log("Showing Error");
      console.log(error);
    })
  },[nextId]);

  return (
    <TodoListBox>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBox>
  );
}

export default TodoList;