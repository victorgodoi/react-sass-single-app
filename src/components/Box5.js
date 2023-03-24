import styled from "styled-components"

const DivBox = styled.div`
    width: 100%;
    display: flex;
`
const DivEsq = styled.div`
    margin-right: 128px;
`
const DivDir = styled.div`
    display: flex;
    flex: 1;
`
const Link = styled.li`
    display: inline-block;
    margin-right: 18px;

    &:last-of-type {
    margin-right: 0px;
    }
`
const List = styled.ul`
    flex: 1;
`
const Link2 = styled.li`
    margin-bottom: 23px;

    &:first-of-type {
    color: $cinzaEscuro;
    }
`
const Box5 = () => {
    return <DivBox>
        <DivEsq>
            <img src='/Images/Imagem4.png' width='67' height='61' />
            <ul>
                <Link><img src='/Images/LogoInstagram.png' width='17' height='18' /></Link>
                <Link><img src='/Images/LogoTwitter.png' width='18' height='18' /></Link>
                <Link><img src='/Images/LogoFacebook.png' width='13' height='18' /></Link>
                <Link><img src='/Images/LogoYoutube.png' width='18' height='18' /></Link>
            </ul>
        </DivEsq>
        <DivDir>
            <List>
                <Link2>Who We're For</Link2>
                <Link2>Services Tour</Link2>
                <Link2>Services  Timing</Link2>
                <Link2>Experience</Link2>
                <Link2>Payments</Link2>
                <Link2>Expert Doctors</Link2>
                <Link2>PHD Doctors</Link2>
            </List>
            <List>
                <Link2>Services</Link2>
                <Link2>Services Tour</Link2>
                <Link2>Services Growth</Link2>
                <Link2>Services Experience</Link2>
                <Link2>Payments</Link2>
                <Link2>Billings</Link2>
            </List>
            <List>
                <Link2>Contact</Link2>
                <Link2>Newsroom</Link2>
                <Link2>Leaders</Link2>
                <Link2>Case Studies</Link2>
                <Link2>Help Center</Link2>
                <Link2>Blog</Link2>
            </List>
            <List>
                <Link2>About</Link2>
                <Link2>Website Property</Link2>
                <Link2>Doctors</Link2>
                <Link2>Payment Company</Link2>
                <Link2>Partners</Link2>
            </List>
        </DivDir>
    </DivBox>
}

export default Box5