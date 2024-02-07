import styled, { css } from "styled-components"

const Button = styled.button`
    background-color: ${props => props.theme.amarelo};
    border-radius: 10px;
    border: 2px solid ${props => props.theme.cinzaEscuro};
    padding: 10px 25px;
    font-weight: 700;
    font-size: 16px;
    color: ${props => props.theme.cinzaEscuro};
    min-height: 40px;
    transition: all 0.3s;
    &:hover {
        background-color: ${props => props.theme.branco};
      }
      ${({ green }) => green === true && css`
      background-color: ${props => props.theme.verde};
      color: ${props => props.theme.branco};
      font-weight: 500;
      border: 1px solid ${props => props.theme.verde};
  
      &:hover {
        background-color: ${props => props.theme.branco};
        color: ${props => props.theme.verde};
  
      }
    `}
`

export default Button