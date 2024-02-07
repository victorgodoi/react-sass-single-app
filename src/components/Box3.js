import styled from "styled-components"
import Description from "./Description"
import Button from "./Button"
import Subtitle from "./Subtitle"

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 112px;
    padding-top: 90px;
`
const Description2 = styled(Description)`
    max-width: 409px;
`
const Box3 = () => {
    return <Box id='box3' className='box'>
        <div>
            <Subtitle>Each patient carries his own doctor inside him</Subtitle>
            <Description2>The natural healing force within each one of us is the greatest force in getting well.</Description2>
            <Button green>Get Appointment</Button>
        </div>
        <img src='/Images/Imagem3.png' width='511' height='332' />
    </Box>
}
export default Box3