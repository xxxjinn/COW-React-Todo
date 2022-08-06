import React from "react";
import styled from "styled-components";

const TodoTemplateBox = styled.div`
    width: 760px;
    height: 512px;
    position: relative;
    background: white;
    border-radius: 30px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
    margin: 0 auto;
    margin-top : 50px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

function TodoTemplate({children}){
    return <TodoTemplateBox>{children}</TodoTemplateBox>;
}

export default TodoTemplate;