import styled from "styled-components";

import { FcFullTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  background-image:url("src/assets/129201-ORSSZ9-941.jpg");;
  background-size: cover;
  background-repeat: no-repeat;
  
`;

export const TudoLista = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  
  padding: 30px 20px;
  border-radius: 10px;
  width: 500px;

  ul{
    padding: 0;
    margin-top: 50px;
  }
`;

export const Input = styled.input`
width: 400px;
  border: 1px solid;
  border-radius: 5px;
  height: 30px;
  margin-right: 10px;
`;

export const Button = styled.button`
  height:35px;
  background: linear-gradient(#bdc3c7, #2c3e50);
border: none;
color: white;
border-radius: 10px;
width: 84px;
line-height:2px;
cursor: pointer;

&:hover{
opacity: 0.8;
}

&:active{
    opacity: 0.6;
}

`;

export const ListItem = styled.div`
background: ${props => props.isFinished ?'#e8ff8d':'#FFDBB6'};
opacity:0.8;
box-shadow: 1px 4px 10px rgb(0,0,0,0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 10px;

li{
    list-style: none;
}
`
export const Trash = styled(FcFullTrash)`
cursor: pointer;

`

export const Check = styled(FcCheckmark)`
cursor: pointer;
`
export const Tarefas = styled.img`
text-align:center;
height: 100px;
display:block;
margin:0 auto;

`