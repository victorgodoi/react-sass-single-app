import styled from "styled-components"

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    background-color: ${props => props.theme.cinzaEscuro};
    padding: 23px 0px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 1073px;
    p {
        color: ${props => props.theme.branco};
      }
`

const Component = () => {
    return <Footer>
        <Content>
            <p>&copy; 2022 Rights Reserved, Taqwah Digital</p>
            <p>Privacy | Terms & Conditions | Privacy by Design | Secure by Design</p>
        </Content>
    </Footer>
}

export default Component 