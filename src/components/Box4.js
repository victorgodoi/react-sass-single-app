import styled from "styled-components"
import Description from "./Description"
import Button from "./Button"
import Subtitle from "./Subtitle"

const DivBox = styled.div`
    width: 100%;
    background-color: ${props => props.theme.cinzaSuperClaro};
    text-align: center;
    border-radius: 20px;
    padding-top: 21px;
    padding-bottom: 36px;
    margin-bottom: 160px;
`

const Subtitle2 = styled(Subtitle)`
    max-width: 100%;
`
const Box4 = () => {
    return <DivBox>
        <Subtitle2>In nothing do men more nearly approach</Subtitle2>
        <Description>The natural healing force within each one of us is the greatest force in getting well.</Description>
        <Button green>Go To Services</Button>
    </DivBox>
}

export default Box4