import React,{useState, useEffect} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoListBox = styled.div`
    flex:1;
    padding: 120px 32px;
    padding-bottom: 40px;
    overflow-y: auto;
`;

function TodoList(){
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
    });

  return (
    <TodoListBox>
      {items && items.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.content}
          done={item.done}
        />
      ))}
    </TodoListBox>
  );
}

export default TodoList;