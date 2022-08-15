import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoFooterBox = styled.div`
    text-align: right;
    padding-right: 30px;
    color:#9D9D9D;
    font-weight: bold;
    font-size: 19px;
    .tasks{
        color:#97B191;
    }
`;


function TodoFooter(){
    const todos = useTodoState();
    console.log(todos);
    const undoneTask = todos.filter(todo => !todo.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return(
        <TodoFooterBox>
            <p className="tasks">There are {undoneTask.length} more things to do.</p>
            <p>{dateString}</p>
        </TodoFooterBox>
    );
}

export default TodoFooter;