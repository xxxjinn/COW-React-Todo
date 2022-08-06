import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBox = styled.div`
    flex:1;
    padding: 120px 32px;
    padding-bottom: 40px;
    overflow-y: auto;
`;

function TodoList(){
    return ( 
        <TodoListBox>
            <TodoItem text="리액트 공부하기" done={true}/>
            <TodoItem text="쇼핑하기" done={true}/>
            <TodoItem text="에어팟 충전하기" done={false}/>
        </TodoListBox>
    );
}

export default TodoList;