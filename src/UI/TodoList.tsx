import React from "react";
import {todoType} from "./TypeIntefice";
import styled from "styled-components";
import * as events from "events";



const Input=styled.input`
    border: 0px;
    background: bottom;
    font-size: 20px;
    margin-left: 10px;
    font-family: Bradley Hand;
    font-style: italic;
  :focus-visible{
    outline: none;
  }
  
`;




interface TodoListIt{
    todo:todoType[]
    editTodo(id: number,task:string): void
    deleteTodo(id:number): void
    editToogle(id:number,check:boolean): void
    cur_input:string
}

const TodoList: React.FC<TodoListIt>=({todo,editTodo,deleteTodo,editToogle,cur_input})=>{




    return(
        <ul className="list-group list-group-flush ul-p-t-200">
            {todo.map(t=>{
                if(t.value.startsWith(cur_input)){
               return(
                   <li className="list-group-item li-bg" key={t.id}>
                       <input type="checkbox"
                              onChange={(e)=>editToogle(t.id,e.currentTarget.checked)}
                       />
                       <Input value={t.value} onChange={(e)=>editTodo(t.id,e.target.value)}/>
                       <button className="btn btn-outline-danger"
                               onClick={()=>deleteTodo(t.id)}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                               <path
                                   d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                           </svg>
                       </button>
                   </li>
               )
            }})

            }
        </ul>
    )
}
export default TodoList