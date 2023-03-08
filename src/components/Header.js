import styled from "styled-components"
import MenuItem from './MenuItem'

const Header = styled.header`
    width: 100%;
    height: 108px;
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: $branco;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Content = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 1073px;
`

const Component = () => {
    return <Header>
        <Content>
            <img src='/Images/Logo.png' width='143' height='52' />
            <nav>
                <ul>
                    <MenuItem link='#' nome='Home' selected={true} />
                    <MenuItem link='#box2' nome='Why Hella?' />
                    <MenuItem link='#box3' nome='Services' />
                    <MenuItem link='#box4' nome='Contact' />
                </ul>
            </nav>
            <ul>
                <li>Login</li>
                <li><button>Sign up</button></li>
            </ul>
        </Content>
    </Header>

}

export default Component