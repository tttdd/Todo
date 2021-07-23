import styled from "styled-components";
import Image from 'react-bootstrap/Image'
import Book from "./img/book1.png"

const title=(props)=>{
      const Title=styled.section`
        background: #61dafb;
        min-height:25px;
        display: flex;
        justify-content: center;
        width: 60%;
        margin: 0 auto;
    `;
      const Text=styled.h1`
        color: aliceblue;
        font-size: 36px;
      `
    return(
    <Title>
        <Image src={Book} rounded />
        <Text>MyTaskList</Text>
    </Title>
    )
}

export default title