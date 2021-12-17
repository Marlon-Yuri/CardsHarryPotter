import React from 'react'
import { Link } from 'gatsby'
import Carousel from 'react-elastic-carousel';
import styled from "styled-components"



const Container = styled.section`
background-image:url('https://wallpaperaccess.com/full/2716730.jpg');
background-size:cover;
background-position-y:18%;
`
const Img = styled.img`
width:7vw;
`
const Box = styled.div`
filter: drop-shadow(0 0 0.75rem crimson);
display:flex;
flex-direction:column;
align-items:center;
font-size:1.6vw;
width:60vw;
height:90vh;
color:white;
`


export default function Casas() {
  return (

    <div>

      <Container>
        <Carousel>
        <Box>
          <h2> Grifinória </h2>
          <Img src="https://i.pinimg.com/originals/35/58/30/355830d98c2a235085848c6a20b675c4.jpg" alt="Grifinória" />
          <p className="p1"> A Grifinória, fundada por Godrico Gryffindor, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts. Ao estabelecê-la, Godrico instruiu o Chapéu Seletor a classificar estudantes que obtivessem características as quais ele mais valorizava, como a coragem, o cavalheirismo e a determinação. Suas cores são o escarlate e o ouro e seu animal emblemático é um leão. Sir Nicholas de Mimsy-Porpington, também conhecido como "Nick Quase Sem Cabeça" é o fantasma patrono da casa.

            A casa corresponde aproximadamente ao elemento fogo, e é por esta razão, que suas cores foram escolhidas; elas também podem corresponder a um leão; com o escarlate representando sua crina e cauda e o ouro simbolizando sua pelagem. </p>
        </Box>


        <Box>
          <h2> Sonserina </h2>
          <Img src="http://pm1.narvii.com/7350/2f76b6a123c86007ce077676c2d0bdb2aa7bb558r1-736-1308v2_uhq.jpg" alt="Sonserina" />
          <p className="p2"> A Sonserina, fundada por Salazar Slytherin, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts. Ao estabelecer a casa, Salazar instruiu o Chapéu Seletor a escolher somente alunos que obtivessem algumas de suas características particulares as quais ele prezava. Entre elas incluem a astúcia, desenvoltura, liderança e ambição. Vários membros da Sonserina possuem uma certa tendência em formar grupos, muitas vezes adquirindo líderes, o que exemplifica ainda mais as qualidades ambiciosas de Slytherin.

            O fundador, de acordo com o próprio Chapéu Seletor, valorizava e favorecia estudantes de sangue puro. Entretanto, qualquer aluno que possui um status sanguíneo diferente, pode ser colocado na casa.

            Seu animal emblemático é uma serpente e suas cores são verde e prata. Há dois diretores notáveis da Sonserina; Horácio Slughorn que assumiu o cargo duas vezes (primeiro se aposentou em 1981 e retornou como diretor em 1997 até pouco antes de 2016) e Severo Snape. O fantasma patrono da casa é o Barão Sangrento.

            A Sonserina corresponde aproximadamente ao elemento água, dado que as serpentes são comumente associadas aos mares e lagos na mitologia da Europa Ocidental, bem como por serem animais fisicamente fluidos e flexíveis. Da mesma forma, na mitologia celta, a água é vista como um portal para outro mundo, levando a especulação de que o elemento foi escolhido para simbolizar a esperança de vários Sonserinos por uma comunidade inteiramente "pura". Suas cores também se baseiam nas águas ao redor de lagos — que por sua vez são frequentemente esverdeados — e prata para a associação da água cinzenta da chuva. </p>
        </Box>

        <Box>
          <h2> Corvinal</h2>
          <Img src="https://i.pinimg.com/originals/29/3d/3c/293d3cb2a642afc6d1641463f8a0bdb7.jpg" alt="Corvinal" />
          <p className="p3"> A Corvinal, fundada por Rowena Ravenclaw, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts. Seus membros, comumente, são caracterizados por sua inteligência, aprendizado e sabedoria. Suas cores são o azul e bronze, o animal emblemático é uma águia e sua fantasma patrono é a Dama Cinzenta[10]. A casa possui um diretor notável, o Mestre de Feitiços Fílio Flitwick.

            A casa corresponde aproximadamente ao elemento ar, e é por essa razão que suas cores foram escolhidas; o azul representa o céu e o bronze pode representar as penas de uma águia, ambos tendo muita relação com tal elemento.</p>
        </Box>

        <Box>
          <h2> Lufa-Lufa </h2>
          <Img src="https://http2.mlstatic.com/D_NQ_NP_720746-MLB43524083051_092020-O.jpg" alt="Lufa-Lufa" />
          <p className="p4"> A Lufa-Lufa, fundada por Helga Hufflepuff, é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, sendo conhecida como a mais inclusiva entre as outras três; valorizando o trabalho árduo, a dedicação, a paciência, a lealdade e o jogo limpo ao invés de uma aptidão particular de seus membros. Seu animal emblemático é um texugo e suas cores são o amarelo e o preto. A diretora da casa mais notável é a Mestra de Herbologia Pomona Sprout e seu fantasma patrono é o Frei Gorducho.
            A casa corresponde aproximadamente ao elemento terra, e é por essa razão que suas cores foram escolhidas: o amarelo representa o trigo, enquanto o preto um símbolo do solo. Os estudantes classificados para a Lufa-Lufa comumente demonstram habilidades excepcionais em Herbologia, dado à correspondência da casa com a terra. </p>
        </Box>     
       </Carousel>
        <Link to="/"> <button> Back </button> </Link>
      </Container>
     

    </div>
  )
}