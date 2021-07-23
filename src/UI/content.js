import React, {useState} from "react";
import styled from "styled-components";
import Tasks from "./Tasks";
const Сontent=(props)=>{
    const Main=styled.main`
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    `
    const Input=styled.input`
          padding: 15px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          width: 80%;
    `
    let [life,editLife]=useState(true)


    let inputRel=React.createRef()
    let keys=Object.keys(localStorage)


    let onKeyPressHandler=(event)=>{
        if (event.keyCode === 13) {
          add_new_Task()
            change_value("")
        }
    }



    let [new_input_value,change_value]=useState("")

    let set_new_val=(e)=>{
        change_value(e.currentTarget.value)
    }
    let add_new_Task=()=>{
        editLife(true)
        localStorage.setItem(localStorage.length.toString(),new_input_value)
    }
    let local_clear=()=>{
        localStorage.clear()
    }
    return(
        <Main>
            <Input placeholder={"Add Task...."} ref={inputRel}  autoFocus={true} onChange={set_new_val} value={new_input_value} onKeyDown={onKeyPressHandler}/>

            {keys.length!=0 ? keys.map((key)=>{
                return <Tasks name={localStorage.getItem(key)} k={key} editLife={editLife}></Tasks>
            }):null}
        </Main>
    )
}

export default Сontent