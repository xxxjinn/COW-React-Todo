import React, {useState} from "react";
import styled, {css} from "styled-components";
import {BsCheck} from "react-icons/bs";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const InsertFormPositioner = styled.div`
    width: 100%;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding: 20px 30px 72px 30px;
    height: 1px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom: 1px solid #e9ecef;
    .checkButton{
        position: relative;
        left:-30px;
        top:10px;
        color:#B7B7B7;
    }
    .checkButton:hover{
        color:#55A541;
    }
`;

const Input = styled.input`
    background: #f8f9fa;
    padding: 0px;
    border: none;
    width: 80%;
    height: 50px;
    font-size: 30px;
    &:focus{
        outline: none;
    }
`;

function TodoInsert(){
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = e => setValue(e.target.value);
    const onSubmit = e =>{
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
              id: nextId.current,
              text: value,
              done: false
            }
          });
          setValue('');
          nextId.current += 1;
        };

    return(
        <>
            <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <BsCheck className="checkButton" size={40}/>
                        <Input autoFocus placeholder="What needs to be done?"
                            onChange={onChange} value={value}/>
                    </InsertForm>
            </InsertFormPositioner>
        </>
    );
}

export default TodoInsert;