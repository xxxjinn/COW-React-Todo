import React from "react";
import styled from "styled-components";

const TodoDateBox = styled.div`
    text-align: right;
    padding-right: 40px;
    color:#9D9D9D;
    font-weight: bold;
    font-size: 19px;
`;

function TodoDate(){
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return(
        <TodoDateBox>
            <p>{dateString}</p>
        </TodoDateBox>
    );
}

export default TodoDate;