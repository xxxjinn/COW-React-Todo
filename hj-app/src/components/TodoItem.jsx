import React,{useCallback}  from 'react';
import styled, {css} from "styled-components";
import {MdDone, MdOutlineClose} from "react-icons/md";
import { useTodoDispatch } from '../TodoContext';
import axios from 'axios';

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

const NullBox = styled.div`
    width:30px;
    height:30px;
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
            color: #55A541;
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

function TodoItem({
    id, done, text
  }){
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
      /*useCallback((e)=>{
        axios.delete("http://localhost:5000/todo/"+id).then(function(response){
            console.log(response);
            console.log("삭제");
        })
        .catch(function(error){
            console.log(error);
        })
    });*/
  return (
    <TodoItemBox>
        <CheckCircle done={done} onClick={onToggle}>
            {done && <MdDone />}
        </CheckCircle>
        <Text done={done}>{text}</Text>
        <NullBox>
          <Remove onClick={onRemove}>
            < MdOutlineClose/>
          </Remove>
        </NullBox>
    </TodoItemBox>
  );
}

export default React.memo(TodoItem);