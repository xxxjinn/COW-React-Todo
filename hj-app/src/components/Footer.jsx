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
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    return(
        <TodoFooterBox>
            <p className="tasks">There are {undoneTasks.length} more things to do.</p>
            <p>{dateString}</p>
        </TodoFooterBox>
    );
}

export default TodoFooter;