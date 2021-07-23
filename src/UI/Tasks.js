import {useState} from "react";
import React from "react";
import styled from "styled-components";
import InputGroup from 'react-bootstrap/InputGroup'
import {FormControl} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Basket from "./img/basket.png"
const Tasks=(props)=>{
    const Main=styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0px;
    `;

    let [editMode,setEditMode]=useState(false)
    let [task,editTask]=useState(props.name)

    let [check_status,editStatus]=useState(false)
    let [life,editLife]=useState(true)

    let checkLink=React.createRef()

    const checkToggle=(e)=>{
        if (check_status==false) {
           e.currentTarget.checked=true
            editStatus(true)
        }
        else {
            e.currentTarget.checked=false
            editStatus(false)
        }
    }
    const activateMode=()=>{
        if (checkLink.current.checked)
            setEditMode(true)
    }
    const deactivateMode=()=>{
        setEditMode(false)
    }
    const onStatusChange=(e)=>{
        editTask(e.currentTarget.value)
        localStorage.setItem(props.k.toString(),task)
    }
    const removeTask=(e)=>{
        if (checkLink.current.checked) {
            localStorage.removeItem(e.currentTarget.title)
            editLife(false)
        }
    }
    return(
            <div>
                { life?<Main>
                    <input type="checkbox" checked={check_status} onChange={checkToggle} ref={checkLink}></input>
                {!editMode &&
                    <span onDoubleClick={activateMode}>{task}</span>
                }
                {editMode &&
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} value={task}></input>
                }
                    <Image src={Basket} onClick={removeTask} title={props.k}></Image>
                </Main>:<div></div>}
            </div>
    )
}
export default Tasks