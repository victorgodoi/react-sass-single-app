import styled from "styled-components"
import Description from "./Description"
import Button from "./Button"

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Title = styled.h1`
    font-weight: 600;
    font-size: 57px;
    color: ${props => props.theme.cinzaEscuro};
    max-width: 500px;
    line-height: 1.2;
    letter-spacing: -1px;
    margin-top: 36px;
    margin-bottom: 24px;

`
const SubTitle = styled(Description)`
    margin-bottom: 65px;
    max-width: 419px;
`
const DivEsq = styled.div`
    width: 528px;
    position: relative;
    img {
        position: absolute;
        z-index: -1;
        top: 170px;
        left: -12px;
      }
`

const Actions = styled.div`
    display: flex;
    align-items: center;
`

const Link = styled.p`
    margin: 0 0 0 19px;
    color: $cinzaEscuro;
    text-decoration: underline;
`
const DivDir = styled.div`
      img {margin-top: 36px;}
`

const Box1 = () => {
    return <Box>
        <DivEsq>
            <Title>Healing yourself is connected with healing others.</Title>
            <img src='/Images/bgTitulo.png' width='230' height='82' />
            <SubTitle>The natural healing force within each one of us is the greatest force in getting well.</SubTitle>
            <Actions>
                <Button green>Get Appointment</Button>
                <Link>Why Hella?</Link>
            </Actions>
        </DivEsq>
        <DivDir><img src='/Images/Imagem1.png' width='510' height='380' /></DivDir>
    </Box>
}

export default Box1