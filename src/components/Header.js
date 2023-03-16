import styled, { css } from "styled-components"
import MenuItem from './MenuItem'

const Header = styled.header`
    width: 100%;
    height: 108px;
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: ${props => props.theme.branco};
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ small }) => small === true && css`
        border-bottom: 1px solid ${props => props.theme.cinzaClaro};
        height: 80px;
    `}
`
const Content = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 1073px;
`

const MenuAuth = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    display: flex;
    align-items: center;
    li:first-of-type{
        margin-right: 20px;
    }
`

const Component = ({ small, itemAtivo }) => {
    return <Header small={small}>
        <Content>
            <img src='/Images/Logo.png' width='143' height='52' />
            <nav>
                <ul>
                    <MenuItem link='#' nome='Home' selected={itemAtivo === '#'} />
                    <MenuItem link='#box2' nome='Why Hella?' selected={itemAtivo === '#box2'} />
                    <MenuItem link='#box3' nome='Services' selected={itemAtivo === '#box3'} />
                    <MenuItem link='#box4' nome='Contact' selected={itemAtivo === '#box4'} />
                </ul>
            </nav>
            <MenuAuth>
                <li>Login</li>
                <li><button>Sign up</button></li>
            </MenuAuth>
        </Content>
    </Header>

}

export default Component