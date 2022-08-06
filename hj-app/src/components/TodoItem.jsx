import React from 'react';
import styled, {css} from "styled-components";
import {MdDone, MdOutlineClose} from "react-icons/md";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color:#C99292;
    font-size: 20px;
    cursor: pointer;
    display: none;
`;

const TodoItemBox = styled.div`
    display: flex;
    align-items: center;
    padding-top:20px;
    padding-bottom: 12px;
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 16px;
    border: 2px solid #B7B7B7;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
            border: 2px solid #55A541;
            color: #55A541
        `}
`;

const Text = styled.div`
    flex:1;
    font-size: 21px;
    color: #495057;
     ${props =>
        props.done &&
        css`
            color: #B7B7B7;
            text-decoration:line-through ;
        `}
`;

function TodoItem({id, done, text}){
    return(
        <TodoItemBox>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdOutlineClose/>
            </Remove>
        </TodoItemBox>
    );
}

export default TodoItem;