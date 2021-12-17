import React from 'react'
import * as S from './style'
import { Link } from 'gatsby'
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ebcb1e;
  transition: 1s;
  &:hover {
    color: indianred;
  }
`;


export function Header() {
  return (
    <S.Container>
       <img src ="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/WhatsApp-Image-2021-11-16-at-14.52.17.jpeg?w=1200&h=675&crop=1" alt="" width="300"/>   
      <S.List>
        <li>
      <StyledLink to="/Sobre">The Author</StyledLink>
      </li>      
      <li>
      <StyledLink to="/Casas"> Casas </StyledLink>   
     </li> 
      </S.List>

    </S.Container>
  )
}