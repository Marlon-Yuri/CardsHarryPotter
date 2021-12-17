import styled from "styled-components";

export const Container = styled.section`
  background-image: url(https://image.freepik.com/free-vector/vintage-wallpaper-seamless-background-design-retro-style_1284-46000.jpg);
  background-size: contain;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1rem; 
  background-image: url(data:image/jpeg;base64,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);
`
export const H1 = styled.h1`

`
export const Img = styled.img`
border-radius:10%;
border:solid black;
`