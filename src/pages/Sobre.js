import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"


const Container = styled.section`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:100%;
height:100vh;
background-image:url('https://files.wallpaperpass.com/2019/10/hogwarts%20wallpaper%20086%20-%202560x1440.jpg');
background-repeat:no-repeat;
background-size:cover;
`
const BoxTitle = styled.div`
width:40vw;
height:10vh;
display:flex;
justify-content:center;
align-items:center;
font-size:2vw;

`
const BoxAbout= styled.div`
display:flex;
margin-top:5%;
font-size:1.6vw;
`


export default function Sobre() {
    return (
        <Container>
                <BoxTitle>
                    <h1>J. K. Rowling</h1>
                </BoxTitle>
                <BoxAbout>
                <p> Joanne "Jo" Rowling, mais conhecida como J. K. Rowling, é uma escritora, roteirista e produtora cinematográfica britânica, notória por escrever a série de livros Harry Potter. Os livros ganharam uma popularidade mundial, recebendo múltiplos prêmios e vendendo mais de 500 milhões de cópias. Eles se tornaram a série literária mais vendida da história. A Warner Bros. adaptou os livros para o cinema, fazendo com que os filmes entrassem na lista de filmes de maior bilheteria. </p>
                <img src="https://todateen.com.br/wp-content/uploads/2019/06/0530_JK-Rowling-Harry-Potter.jpg" alt="Foto de J. K. Rowling" width="300px" />
                </BoxAbout>
               
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/JKRowlingsignature.png/150px-JKRowlingsignature.png" alt="Assinatura de J. K. Rowling" width="150px" />

            <Link to="/"> <button> Back </button> </Link>

        </Container>
    )
}