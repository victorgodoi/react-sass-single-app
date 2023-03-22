import styled from "styled-components"
import Description from "./Description"
import Button from "./Button"
import Subtitle from "./Subtitle"

const IdBox = styled.div`
    width: 100%;
    position: relative;
    padding-top: 160px;
`
const Img2 = styled.div`
    position: absolute;
    z-index: -1;
    top: 108px;
    left: 845px;

`
const Text = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 56px;
    color: ${props => props.theme.cinzaEscuro};
    max-width: 686px;
    margin: 0px 193px;
    text-align: center;
`
const DivBox = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 47px;
    align-items: center;
`
const NewH3 = styled(Description)`
    max-width: 408px;
`
const DivDir = styled.div``

const Box2 = () => {
    return <IdBox>
        <Text>Community health centers do a great deal with limited resources</Text>
        <Img2><img src='/Images/bgBox2.png' width='100' height='84' /></Img2>
        <DivBox>
            <img src='/Images/Imagem2.png' width='373' height='324' />
            <DivDir>
                <Subtitle>The life so short, the craft so long to learn</Subtitle>
                <NewH3>The natural healing force within each one of us is the greatest force in getting well.</NewH3>
                <Button green>Get Appointment</Button>
            </DivDir>
        </DivBox>
    </IdBox>
}

export default Box2